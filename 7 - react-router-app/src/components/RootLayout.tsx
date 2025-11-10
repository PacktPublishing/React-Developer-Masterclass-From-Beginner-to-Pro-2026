import { Outlet, useNavigation } from "react-router";
import { Loader } from "./Loader";

const RootLayout = () => {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="relative min-h-screen">
      {isLoading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-200 bg-opacity-70 backdrop-blur-sm">
          <Loader />
        </div>
      )}
      <div className="container mx-auto p-4">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
