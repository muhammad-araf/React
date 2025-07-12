import React, { Suspense } from 'react';
const LazyLoading = React.lazy(() => import('./LazyLoader02'))
const LazyLoader = () => {
   return (
    <Suspense fallback={<h2>Wait............</h2>}>
     <h2>Code Splitting</h2> 
      <LazyLoading />
    </Suspense>
  );
}

export default LazyLoader