import "./index.css";
import store from "./lib/store";

import { Provider } from "react-redux";
import { HomePage } from "./pages/HomePage";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <HomePage />
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
