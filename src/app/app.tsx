import React, { lazy } from 'react';
import { Switch, Route } from 'react-router';

import Navbar from '../components/shared/nav/navbar';
import Footer from '../components/shared/footer/footer';

// Pages
import withSuspense from '../hoc/withSuspense';
import NotFound from '../components/notFound';
const Home = lazy(() => import('../components/home'));
const Calendar = lazy(() => import('../components/calendar/calendar'));
const Podcast = lazy(() => import('../components/podcast'));

export const App: React.FunctionComponent = () => {
    return (
        <div className="structure">
            <Navbar />
            <div className="main-container">
                <Switch>
                    <Route path="/calendar" component={withSuspense(Calendar)} />
                    <Route path="/podcast"  component={withSuspense(Podcast)} />
                    <Route path="/" component={withSuspense(Home)} />

                    {/* 404 Handler must come last */}
                    <Route path="*" component={NotFound} />
                </Switch>
            </div>
            <Footer />
        </div>
    );
};
