// next imports
import { useRouter } from "next/router";

// react imports
import { useEffect } from "react";

// urls
import { LOGIN_PAGE } from "../../urls/in_app_urls";

// store
import { useAppSelector } from "../../hooks/store-hooks";
import { selectIsAuthenticated } from "../../store/auth";

const RouteGuard: React.FC = (props) => {
  const isAuth = useAppSelector(selectIsAuthenticated);
  const router = useRouter();

  useEffect(() => {
    if (!isAuth) {
        router.push(`${LOGIN_PAGE}?next=${router.pathname}`);
    }
  }, [router, isAuth]);

  return <div>{props.children}</div>;
};

export default RouteGuard;
