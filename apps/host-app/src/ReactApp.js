import React, { Suspense } from 'react';
const PortfolioComponent = React.lazy(() => import('portfolioReact/PortfolioComponent'));

const App = () => {
    return (
        <Suspense fallback={"loading..."}>
            <PortfolioComponent />
        </Suspense>
    );
}

export default App;
