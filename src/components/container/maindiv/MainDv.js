import React from 'react'
import ThreeWay from './ThreeWay'
import TwoWay from './TwoWay'

const MainDv = ({eightfootballm, eighttennism}) => {
  let div_eighttennism;
  let div_dep;
  if (eightfootballm) {
    console.log(eightfootballm,"eight football")
    div_dep = eightfootballm.map((cd)=>cd.surebet_type === "2"? <TwoWay icon_image ="icon-football" link_away ={cd.eight_link} link_home ={cd.onexbet_link} percentage = {`${cd.percentage}%`} src_away={cd.eight_logo_url} src_home ={cd.onexbet_logo_url} odds_home = {cd.event_name_one} odds_away={cd.event_name_two} event_name_home={cd.event_name_one_name} event_name_away={cd.event_name_two_name} game_event_name = {cd.event} country = {cd.sport_name} league ={cd.event_league} date={cd.event_date}  home_team={cd.home_team} away_team={cd.away_team}/>: cd.surebet_type === "3" ? 
    <ThreeWay percentage={`${cd.percentage}%`} link_3={cd.image_url_3} odds3={cd.odds3} event_name_3={cd.event_name_three} link_2={cd.image_url_2} odds2={cd.odds2} event_name_2={cd.event_name_two} link_1={cd.image_url_1} odds1 ={cd.odds1} event_name_1={cd.event_name_one} event_name ={cd.event} away_team={cd.away_team} home_team ={cd.home_team} date={cd.event_date} icon_image="icon-football" country = {cd.sport_name} league={cd.event_league} href_1={cd.link_1} href_2 ={cd.link_2} href_3 = {cd.link_3}/>
   
: null  )
  }

  if (eighttennism) {
    console.log(eighttennism,"eight football")
    div_dep = eighttennism.map((cd)=>cd.surebet_type === "2"? <TwoWay icon_image ="icon-football" link_away ={cd.eight_link} link_home ={cd.onexbet_link} percentage = {`${cd.percentage}%`} src_away={cd.eight_logo_url} src_home ={cd.onexbet_logo_url} odds_home = {cd.event_name_one} odds_away={cd.event_name_two} event_name_home={cd.event_name_one_name} event_name_away={cd.event_name_two_name} game_event_name = {cd.event} country = {cd.sport_name} league ={cd.event_league} date={cd.event_date}  home_team={cd.home_team} away_team={cd.away_team}/>: cd.surebet_type === "3" ? 
    <ThreeWay percentage={`${cd.percentage}%`} link_3={cd.image_url_3} odds3={cd.odds3} event_name_3={cd.event_name_three} link_2={cd.image_url_2} odds2={cd.odds2} event_name_2={cd.event_name_two} link_1={cd.image_url_1} odds1 ={cd.odds1} event_name_1={cd.event_name_one} event_name ={cd.event} away_team={cd.away_team} home_team ={cd.home_team} date={cd.event_date} icon_image="icon-football" country = {cd.sport_name} league={cd.event_league} href_1={cd.link_1} href_2 ={cd.link_2} href_3 = {cd.link_3}/>
   
: null  )
  }
    return (
        <div className="btools-matches">
        {/**/} 
        {div_dep}
        {div_eighttennism}
      
       
        <div className="btools-pagination"><a href>Show more</a></div>
        {/**/}
      </div>
    
    )
}

export default MainDv
