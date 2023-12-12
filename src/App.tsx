import { BrowserRouter as Router } from "react-router-dom";
import RoutesContent from "./Routes";

import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
      <Router>
        <AuthProvider>
          <RoutesContent />
        </AuthProvider>
      </Router>
  );
}

export default App;
