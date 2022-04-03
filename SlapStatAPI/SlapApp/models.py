from django.db import models

# Create your models here.
#Create Team Model
class Team(models.Model):
    Team_ID = models.AutoField(primary_key=True)
    Name = models.CharField(max_length=100)
    League = models.CharField(max_length=100)
    Division = models.CharField(max_length=100)

#Create Personnel Model
class Personnal(models.Model):
    Email = models.CharField(primary_key=True, max_length=100)
    Team_ID = models.ForeignKey(Team, on_delete=models.CASCADE, db_column='Team_ID')
    F_Name = models.CharField(max_length=100)
    L_Name = models.CharField(max_length=100)
    Password = models.CharField(max_length=100)

#Create Coach Model
class Coach(models.Model):
    Email = models.ForeignKey(Personnal, on_delete=models.CASCADE, db_column='Email')
    Team_ID = models.ForeignKey(Team, on_delete=models.CASCADE, db_column='Team_ID')

#Create Player Model
class Player(models.Model):
    Email = models.ForeignKey(Personnal, on_delete=models.CASCADE, db_column='Email')
    Team_ID = models.ForeignKey(Team, on_delete=models.CASCADE, db_column='Team_ID')
    Height = models.PositiveIntegerField()
    Weight = models.PositiveIntegerField()
    Handedness = models.CharField(max_length=1)
    Number = models.PositiveIntegerField()
    Position = models.CharField(max_length=2)


#Create Game Model
class Game(models.Model):
    Team_ID = models.ForeignKey(Team, on_delete=models.CASCADE, db_column='Team_ID')
    Game_ID = models.AutoField(primary_key=True)
    HomeAway = models.CharField(max_length=1)
    Opponent = models.CharField(max_length=100)
    Date = models.DateField()

#Create Player_stats Model
class Player_Stats(models.Model):
    Email = models.ForeignKey(Personnal, on_delete=models.CASCADE, db_column='Email')
    Team_ID = models.ForeignKey(Team, on_delete=models.CASCADE, db_column='Team_ID')
    GamesPlayed = models.PositiveIntegerField()
    Goals = models.PositiveIntegerField()
    Assists = models.PositiveIntegerField()
    Shots = models.PositiveIntegerField()
    Hits = models.PositiveIntegerField()
    F_wins = models.PositiveIntegerField()
    F_losses = models.CharField(max_length=1)

#Create Shots Model
class Shot(models.Model):
    Shot_ID = models.AutoField(primary_key=True)
    X_location = models.PositiveIntegerField()
    Y_location = models.PositiveIntegerField()

#Create Team_stats Model
class Team_Stats(models.Model):
    Team_ID = models.ForeignKey(Team, on_delete=models.CASCADE, db_column='Team_ID')
    Wins = models.PositiveIntegerField()
    Losses = models.PositiveIntegerField()
    PIMS = models.PositiveIntegerField()
    Shots_against = models.PositiveIntegerField()

#Create Game_Sheet Model
class Game_Sheet(models.Model):
    Game_ID = models.ForeignKey(Game, on_delete=models.CASCADE, db_column='Game_ID')
    Team_score = models.PositiveIntegerField()
    Opponent_score = models.PositiveIntegerField()
    Team_shots = models.PositiveIntegerField()
    Opponent_shots = models.PositiveIntegerField()
    Team_hits = models.PositiveIntegerField()
    F_wins = models.PositiveIntegerField()
    F_losses = models.PositiveIntegerField()

#Create Plays Model
class Plays(models.Model):
    Email = models.ForeignKey(Personnal, on_delete=models.CASCADE, db_column='Email')
    Game_ID = models.ForeignKey(Game, on_delete=models.CASCADE, db_column='Game_ID')

#Create Game_Logs Model
class Game_Logs(models.Model):
    Shot_ID = models.ForeignKey(Shot, on_delete=models.CASCADE, db_column='Shot_ID')
    Game_ID = models.ForeignKey(Game, on_delete=models.CASCADE, db_column='Game_ID')

#Create Takes Model ***Slight change needed to be made***
class Takes(models.Model):
    Shot_ID = models.ForeignKey(Shot, on_delete=models.CASCADE, db_column='Shot_ID')
    Email = models.ForeignKey(Personnal, on_delete=models.CASCADE, db_column='Email')

#Create Team Model
class Admin(models.Model):
    Email = models.AutoField(primary_key=True, max_length=100)
    Password = models.CharField(max_length=100)

