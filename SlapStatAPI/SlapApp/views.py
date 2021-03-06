from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from django.db.models import F

from SlapApp.models import *
from SlapApp.serializers import *


# Create your views here.

#This is the API for team table in the database
@csrf_exempt
def teamApi(request, id=0):
    #Get request for Team Method
    if request.method =='GET':
        teams = Team.objects.filter(Team_ID=id)
        teams_serializer = TeamSerializer(teams, many=True)
        return JsonResponse(teams_serializer.data, safe=False)

    #Post request for Team
    elif request.method=='POST':
        teams_data=JSONParser().parse(request)
        team_serializer = TeamSerializer(data=teams_data)
        if team_serializer.is_valid():
            team_serializer.save()
            return JsonResponse(team_serializer.data, safe=False)

    #Delete Request fro Team
    elif request.method=='DELETE':
        team = Team.objects.get(Team_ID=id)
        team.delete()
        return JsonResponse("Deleted Successfully", safe=False)



#This is the API for personnal table in the database
@csrf_exempt
def personnalApi(request, email=''):
    #Get request for Personnal Method
    if request.method =='GET':
        personnal = Personnal.objects.filter(Email=email)
        personnals_serializer = PersonnalSerializer(personnal, many=True)
        return JsonResponse(personnals_serializer.data, safe=False)

    #Post request for Personnal
    elif request.method=='POST':
        personnal_data=JSONParser().parse(request)
        personnal_serializer = PersonnalSerializer(data=personnal_data)
        if personnal_serializer.is_valid():
            personnal_serializer.save()
            return JsonResponse("Added Successfully!", safe=False)
        return JsonResponse("Failed to Add", safe=False)

    #Delete Request fro Team
    elif request.method=='DELETE':
        personnal = Personnal.objects.get(Email=email)
        personnal.delete()
        return JsonResponse("Deleted Successfully", safe=False)
    
    #Put method for PlayerStats
    elif request.method == 'PUT': 
        player_stats_data = JSONParser().parse(request)
        player_stats = Personnal.objects.get(Email=email) 
        player_stats_serializer = PersonnalSerializer(player_stats, data=player_stats_data) 
        if player_stats_serializer.is_valid(): 
            player_stats_serializer.save() 
            return JsonResponse("Personnal Updated", safe=False) 
        return JsonResponse("Failed to Update", safe=False) 

    


#This is the API for Coach table in the database
@csrf_exempt
def coachApi(request, email=''):
    #Get request for Coach Method
    if request.method =='GET':
        coach = Coach.objects.filter(Email=email)
        coachs_serializer = CoachSerializer(coach, many=True)
        return JsonResponse(coachs_serializer.data, safe=False)

    #Post request for Coach
    elif request.method=='POST':
        coach_data=JSONParser().parse(request)
        coach_serializer = CoachSerializer(data=coach_data)
        if coach_serializer.is_valid():
            coach_serializer.save()
            return JsonResponse("Added Successfully!", safe=False)
        return JsonResponse("Failed to Add", safe=False)

    #Delete Request fro Coach
    elif request.method=='DELETE':
        coach = Coach.objects.get(Email=email)
        coach.delete()
        return JsonResponse("Deleted Successfully", safe=False)


#This is the API for Admin table in the database
@csrf_exempt
def adminApi(request, email=''):
    #Get request for Admin Method
    if request.method =='GET':
        admin = Admin.objects.filter(Email=email)
        admins_serializer = AdminSerializer(admin, many=True)
        return JsonResponse(admins_serializer.data, safe=False)

    #Post request for Admin
    elif request.method=='POST':
        admin_data=JSONParser().parse(request)
        admin_serializer = AdminSerializer(data=admin_data)
        if admin_serializer.is_valid():
            admin_serializer.save()
            return JsonResponse("Added Successfully!", safe=False)
        return JsonResponse("Failed to Add", safe=False)

    #Delete Request for Admin
    elif request.method=='DELETE':
        admin = Admin.objects.get(Email=email)
        admin.delete()
        return JsonResponse("Deleted Successfully", safe=False)


#This is the API for Player table in the database
@csrf_exempt
def playerApi(request, email=''):
    #Get request for Player Method
    if request.method =='GET':
        player = Player.objects.filter(Email=email)
        players_serializer = PlayerSerializer(player, many=True)
        return JsonResponse(players_serializer.data, safe=False)

    #Post request for Player
    elif request.method=='POST':
        player_data=JSONParser().parse(request)
        player_serializer = PlayerSerializer(data=player_data)
        if player_serializer.is_valid():
            player_serializer.save()
            return JsonResponse("Added Successfully!", safe=False)
        return JsonResponse("Failed to Add", safe=False)

    #Delete Request for Player
    elif request.method=='DELETE':
        player = Player.objects.get(Email=email)
        player.delete()
        return JsonResponse("Deleted Successfully", safe=False)

    #Put method for PlayerStats
    elif request.method == 'PUT': 
        player_stats_data = JSONParser().parse(request)
        player_stats = Player.objects.get(Email=email) 
        player_stats_serializer = PlayerSerializer(player_stats, data=player_stats_data) 
        if player_stats_serializer.is_valid(): 
            player_stats_serializer.save() 
            return JsonResponse("Player Updated", safe=False) 
        return JsonResponse("Failed to Update", safe=False) 



#This is the API for Game table in the database
@csrf_exempt
def gameApi(request, gameID=0):
    #Get request for Game Method
    if request.method =='GET':
        game = Game.objects.filter(Game_ID=gameID)
        games_serializer = GameSerializer(game, many=True)
        return JsonResponse(games_serializer.data, safe=False)

    #Post request for Game
    elif request.method=='POST':
        game_data=JSONParser().parse(request)
        game_serializer = GameSerializer(data=game_data)
        if game_serializer.is_valid():
            game_serializer.save()
            return JsonResponse(game_serializer.data, safe=False)
        return JsonResponse("Failed to Add", safe=False)

    #Delete Request for Game
    elif request.method=='DELETE':
        game = Game.objects.get(Game_ID=gameID)
        game.delete()
        return JsonResponse("Deleted Successfully", safe=False)


#This is the API for Player_Stats table in the database
@csrf_exempt
def player_statsApi(request, email=''):
    #Get request for PlayerStats Method
    if request.method =='GET':
        player_stats = Player_Stats.objects.filter(Email=email)
        player_statss_serializer = Player_StatsSerializer(player_stats, many=True)
        return JsonResponse(player_statss_serializer.data, safe=False)

    #Post request for PlayerStats
    elif request.method=='POST':
        player_stats_data=JSONParser().parse(request)
        player_stats_serializer = Player_StatsSerializer(data=player_stats_data)
        if player_stats_serializer.is_valid():
            player_stats_serializer.save()
            return JsonResponse("Added Successfully!", safe=False)
        return JsonResponse("Failed to Add", safe=False)

    #Put method for PlayerStats
    elif request.method == 'PUT': 
        player_stats_data = JSONParser().parse(request)
        player_stats = Player_Stats.objects.get(Email=email) 
        player_stats_serializer = Player_StatsSerializer(player_stats, data=player_stats_data) 
        if player_stats_serializer.is_valid(): 
            player_stats_serializer.save() 
            return JsonResponse("Player Stats Updated", safe=False) 
        return JsonResponse("Failed to Update", safe=False) 


#This is the API for Player_Stats table in the database
@csrf_exempt
def shotApi(request, shotid=0):
    #Get request for PlayerStats Method
    if request.method =='GET':
        shot = Shot.objects.filter(Shot_ID=shotid)
        pshot_serializer = ShotSerializer(shot, many=True)
        return JsonResponse(pshot_serializer.data, safe=False)

    #Post request for PlayerStats
    elif request.method=='POST':
        shot_data=JSONParser().parse(request)
        shot_serializer = ShotSerializer(data=shot_data)
        if shot_serializer.is_valid():
            shot_serializer.save()
            return JsonResponse(shot_serializer.data, safe=False)
        return JsonResponse("Failed to Add", safe=False)



#This is the API for Teams_Stats table in the database
@csrf_exempt
def team_statsApi(request, teamid=0):
    #Get request for PlayerStats Method
    if request.method =='GET':
        team_stats = Team_Stats.objects.filter(Team_ID=teamid)
        team_statss_serializer = Team_StatsSerializer(team_stats, many=True)
        return JsonResponse(team_statss_serializer.data, safe=False)

    #Post request for Team_Stats
    elif request.method=='POST':
        team_stats_data=JSONParser().parse(request)
        team_stats_serializer = Team_StatsSerializer(data=team_stats_data)
        if team_stats_serializer.is_valid():
            team_stats_serializer.save()
            return JsonResponse("Added Successfully!", safe=False)
        return JsonResponse("Failed to Add", safe=False)

    #Put method for Team_Stats
    elif request.method == 'PUT': 
        team_stats_data = JSONParser().parse(request)
        team_stats = Team_Stats.objects.get(Team_ID=teamid) 
        team_stats_serializer = Team_StatsSerializer(team_stats, data=team_stats_data) 
        if team_stats_serializer.is_valid(): 
            team_stats_serializer.save() 
            return JsonResponse(team_stats_serializer.data) 
        return JsonResponse("Failed to Update", safe=False) 


#This is the API for Game_Sheet table in the database
@csrf_exempt
def game_sheetApi(request, gameid=0):
    #Get request for PlayerStats Method
    if request.method =='GET':
        game_sheet = Game_Sheet.objects.filter(Game_ID=gameid)
        game_sheets_serializer = Game_SheetSerializer(game_sheet, many=True)
        return JsonResponse(game_sheets_serializer.data, safe=False)

    #Post request for Team_Stats
    elif request.method=='POST':
        game_sheet_data=JSONParser().parse(request)
        game_sheet_serializer = Game_SheetSerializer(data=game_sheet_data)
        if game_sheet_serializer.is_valid():
            game_sheet_serializer.save()
            return JsonResponse("Added Successfully!", safe=False)
        return JsonResponse("Failed to Add", safe=False)

    #Put method for Team_Stats
    elif request.method == 'PUT': 
        game_sheet_data = JSONParser().parse(request)
        game_sheet = Game_Sheet.objects.get(Game_ID=gameid) 
        game_sheet_serializer = Game_SheetSerializer(game_sheet, data=game_sheet_data) 
        if game_sheet_serializer.is_valid(): 
            game_sheet_serializer.save() 
            return JsonResponse(game_sheet_serializer.data) 
        return JsonResponse("Failed to Update", safe=False) 

#This is the API for Game_Sheet table in the database
@csrf_exempt
def allPlayerAPI(request, teamid=0):
    #Get request for PlayerStats Method
    if request.method =='GET':
        game_sheet = Player_Stats.objects.filter(Team_ID=teamid)
        game_sheets_serializer = Player_StatsSerializer(game_sheet, many=True)
        return JsonResponse(game_sheets_serializer.data, safe=False)


#This is the API for Game_Sheet table in the database
@csrf_exempt
def allPlayersAPI(request, teamid=0):
    #Get request for PlayerStats Method
    if request.method =='GET':
        game_sheet = Player.objects.filter(Team_ID=teamid)
        game_sheets_serializer = PlayerSerializer(game_sheet, many=True)
        return JsonResponse(game_sheets_serializer.data, safe=False)

#This is the API for Game_Sheet table in the database
@csrf_exempt
def allPersonnalAPI(request, teamid=0):
    #Get request for PlayerStats Method
    if request.method =='GET':
        game_sheet = Personnal.objects.filter(Team_ID=teamid).select_related()
        game_sheets_serializer = PersonnalSerializer(game_sheet, many=True)
        return JsonResponse(game_sheets_serializer.data, safe=False)


@csrf_exempt
def updateTeamAPI(request, teamid=0):
    if request.method == 'PUT': 
        team_stats_data = JSONParser().parse(request)
        team_stats = Team_Stats.objects.get(Team_ID=teamid)
        team_stats_data['Wins'] = team_stats_data['Wins']+team_stats.Wins
        team_stats_data['Losses'] = team_stats_data['Losses']+team_stats.Losses
        team_stats_data['PIMS'] = team_stats_data['PIMS']+team_stats.PIMS
        team_stats_data['Shots'] = team_stats_data['Shots']+team_stats.Shots
        team_stats_data['Shots_against'] = team_stats_data['Shots_against']+team_stats.Shots_against
        team_stats_serializer = Team_StatsSerializer(team_stats, data=team_stats_data) 
        if team_stats_serializer.is_valid(): 
            team_stats_serializer.save() 
            return JsonResponse(team_stats_serializer.data) 
        return JsonResponse("Failed to Update", safe=False)


@csrf_exempt
def updatePlayerAPI(request, email=''):
    if request.method == 'PUT': 
        team_stats_data = JSONParser().parse(request)
        team_stats = Player_Stats.objects.get(Email=email)
        team_stats_data['GamesPlayed'] = team_stats_data['GamesPlayed']+team_stats.GamesPlayed
        team_stats_data['Goals'] = team_stats_data['Goals']+team_stats.Goals
        team_stats_data['Assists'] = team_stats_data['Assists']+team_stats.Assists
        team_stats_data['Shots'] = team_stats_data['Shots']+team_stats.Shots
        team_stats_data['Hits'] = team_stats_data['Hits']+team_stats.Hits
        team_stats_data['F_wins'] = team_stats_data['F_wins']+team_stats.F_wins
        team_stats_data['F_losses'] = team_stats_data['F_losses']+team_stats.F_losses
        team_stats_serializer = Player_StatsSerializer(team_stats, data=team_stats_data) 
        if team_stats_serializer.is_valid(): 
            team_stats_serializer.save() 
            return JsonResponse(team_stats_serializer.data) 
        return JsonResponse("Failed to Update", safe=False)


#This is the API for Game_Sheet table in the database
@csrf_exempt
def game_logsApi(request, gameid=0):
    #Get request for PlayerStats Method
    if request.method =='GET':
        game_log = Game_Logs.objects.filter(Game_ID=gameid)
        game_logs_serializer = Game_LogsSerializer(game_log, many=True)
        return JsonResponse(game_logs_serializer.data, safe=False)

    #Post request for Team_Stats
    elif request.method=='POST':
        game_log_data=JSONParser().parse(request)
        game_log_serializer = Game_LogsSerializer(data=game_log_data)
        if game_log_serializer.is_valid():
            game_log_serializer.save()
            return JsonResponse("Added Successfully!", safe=False)
        return JsonResponse("Failed to Add", safe=False)


        #This is the API for Game_Sheet table in the database
@csrf_exempt
def takesApi(request, email=''):
    #Get request for PlayerStats Method
    if request.method =='GET':
        take = Takes.objects.filter(Email=email)
        takes_serializer = TakesSerializer(take, many=True)
        return JsonResponse(takes_serializer.data, safe=False)

    #Post request for Team_Stats
    elif request.method=='POST':
        take_data=JSONParser().parse(request)
        take_serializer = TakesSerializer(data=take_data)
        if take_serializer.is_valid():
            take_serializer.save()
            return JsonResponse("Added Successfully!", safe=False)
        return JsonResponse("Failed to Add", safe=False)


        #This is the API for Team_Logs table in the database
@csrf_exempt
def team_logsApi(request, teamid=0):
    #Get request for PlayerStats Method
    if request.method =='GET':
        team_log = Team_Logs.objects.filter(Team_ID=teamid)
        team_logs_serializer = Team_LogsSerializer(team_log, many=True)
        return JsonResponse(team_logs_serializer.data, safe=False)

    #Post request for Team_Stats
    elif request.method=='POST':
        team_log_data=JSONParser().parse(request)
        team_log_serializer = Team_LogsSerializer(data=team_log_data)
        if team_log_serializer.is_valid():
            team_log_serializer.save()
            return JsonResponse("Added Successfully!", safe=False)
        return JsonResponse("Failed to Add", safe=False)


#This is the API for Game table in the database
@csrf_exempt
def allgameApi(request, teamid=0):
    #Get request for Game Method
    if request.method =='GET':
        game = Game.objects.filter(Team_ID=teamid)
        games_serializer = GameSerializer(game, many=True)
        return JsonResponse(games_serializer.data, safe=False)