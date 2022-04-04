from rest_framework import serializers
from SlapApp.models import *

#Create Serializers for all the models
class TeamSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team
        fields = ('Team_ID', 'Name', 'League', 'Division')


class PersonnalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Personnal
        fields = ('Email', 'Team_ID', 'F_Name', 'L_Name', 'Password')


class CoachSerializer(serializers.ModelSerializer):
    class Meta:
        model = Coach
        fields = ('Email', 'Team_ID')


class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = ('Email', 'Team_ID', 'Height', 'Weight', 'Handedness', 'Number', 'Position')


class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ('Team_ID', 'Game_ID', 'HomeAway', 'Opponent', 'Date')


class Player_StatsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player_Stats
        fields = ('Email', 'Team_ID', 'GamesPlayed', 'Goals', 'Assists',
                    'Shots', 'Hits', 'F_wins', 'F_losses')


class ShotSerializer(serializers.ModelSerializer):
    class Meta:
        model = Shot
        fields = ('Shot_ID', 'X_location', 'Y_location')



class Team_StatsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Team_Stats
        fields = ('Team_ID', 'Wins', 'Losses', 'PIMS', 'Shots_against')


class Game_SheetSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game_Sheet
        fields = ('Game_ID', 'Team_score', 'Opponent_score', 'Team_shots',
                    'Opponent_shots', 'Team_hits', 'F_wins', 'F_losses')


class PlaysSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plays
        fields = ('Email', 'Game_ID')


class Game_LogsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game_Logs
        fields = ('Shot_ID', 'Game_ID')


class TakesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Takes
        fields = ('Shot_ID', 'Email')


class AdminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Admin
        fields = ('Email', 'Password')