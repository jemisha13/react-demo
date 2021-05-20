import { Route, Switch } from 'react-router';
import AccountSetting from '../AccountSetting';
import Dashboard from '../Dashboard';
import Leaderboard from '../Leaderboard';
import News from '../News';



const Contents= () => {
  const routes = [
    {
      path: "",
      exact: true,
      sidebar: Dashboard
    },
    {
      path: "/account-setting",
      sidebar: AccountSetting
    },
    {
      path: "/shoelaces",
      sidebar: News
    }
  ];
  

  return (
    
        <Switch>
        <Route
            exact
            path="/"
            name="home"
            component={Dashboard}
        />
        <Route
          exact
          path="/account-setting"
          name="Account Setting"
          component={AccountSetting}
        />
        <Route
          exact
          path="/news"
          name="News"
          component={News}
        />
         <Route
          exact
          path="/leaderboard"
          name="News"
          component={Leaderboard}
        />

  
{/*   
          <Route path="/not-found" component={NotFound} />
          <Route component={NotFound} /> */}
        </Switch>
    );
}

export default Contents;



