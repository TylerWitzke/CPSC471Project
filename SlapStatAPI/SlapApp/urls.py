from django.conf.urls import url
from SlapApp import views


urlpatterns=[
    #Accept all requests to get teams
    url(r'^team/$', views.teamApi),
    url(r'^team/([0-9]+)$', views.teamApi),
    url(r'^team/([^\s]+)$', views.teamApi ),

    #Accept all requests to get personnal
    url(r'^personnal/$', views.personnalApi),
    url(r'^personnal/([^\s]+)$', views.personnalApi ),

    #Accept all requests to get coach
    url(r'^coach/$', views.coachApi),
    url(r'^coach/([^\s]+)$', views.coachApi ),

    #Accept all requests to get coach
    url(r'^admins/$', views.adminApi),
    url(r'^admins/([^\s]+)$', views.adminApi ),

    #Accept all requests to get coach
    url(r'^player/$', views.playerApi),
    url(r'^player/([^\s]+)$', views.playerApi ),

    #Accept all requests to get coach
    url(r'^game/$', views.gameApi),
    url(r'^game/([^\s]+)$', views.gameApi ),

    #Accept all requests to get coach
    url(r'^player_stats/$', views.player_statsApi),
    url(r'^player_stats/([^\s]+)$', views.player_statsApi ),

    #Accept all requests to get coach
    url(r'^shot/$', views.shotApi),
    url(r'^shot/([^\s]+)$', views.shotApi ),

    #Accept all requests to get coach
    url(r'^team_stats/$', views.team_statsApi),
    url(r'^team_stats/([^\s]+)$', views.team_statsApi ),

    #Accept all requests to get coach
    url(r'^game_sheet/$', views.game_sheetApi),
    url(r'^game_sheet/([^\s]+)$', views.game_sheetApi ),

    #Accept all requests to get coach
    url(r'^allplayer/$', views.allPlayerAPI),
    url(r'^allplayer/([^\s]+)$', views.allPlayerAPI ),

    #Accept all requests to get coach
    url(r'^allplayers/$', views.allPlayersAPI),
    url(r'^allplayers/([^\s]+)$', views.allPlayersAPI ),

    #Accept all requests to get allPersonnal
    url(r'^allpersonnal/$', views.allPersonnalAPI),
    url(r'^allpersonnal/([^\s]+)$', views.allPersonnalAPI ),
]
