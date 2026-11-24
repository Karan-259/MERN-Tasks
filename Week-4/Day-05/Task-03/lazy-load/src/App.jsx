import React from 'react'
import { Suspense } from 'react';
const About = React.lazy(() => import('./components/About'));

const App = () => {
  return (
    <Suspense fallback={<h2>Loading...</h2>}>
      <About/>
    </Suspense>
  )
}

export default App