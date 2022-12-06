// react imports
import { useState, useCallback } from "react";
import { toast } from "react-toastify";
import axios from "axios";

// types
import {
  requestConfig,
  DatasetListResponse,
  UserLoginResponse,
  Response
} from "../types/http-types";

export const useSendPostRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [requestCode, setRequestCode] = useState(-1);

  const sendRequest = useCallback(
    async (
      requestConfig: requestConfig,
      applyData?: (resp: Response) => void
    ) => {
      setIsLoading(true);
      setErrorMessage("");

      try {
        const response: Response = await axios.post(
          requestConfig.url,
          requestConfig.data,
          {
            headers: requestConfig.headers ? requestConfig.headers : undefined,
          }
        );

        setRequestCode(response.status);

        if (applyData) {
          applyData(response);
        }
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          toast.error(err.message);

          if (err.response) {
            setRequestCode(err.response.status);
          }
          setErrorMessage(err.message || "Something went wrong");
        }
      }

      setIsLoading(false);
    },
    []
  );

  return {
    isLoading,
    error: {
      message: errorMessage,
      statusCode: requestCode,
    },
    sendRequest,
  };
};

export const useSendGetRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const sendRequest = useCallback(
    async (
      requestConfig: requestConfig,
      applyData?: (resp: Response) => void
    ) => {
      setIsLoading(true);
      setError("");

      console.log(requestConfig);

      try {
        const response: Response = await axios.get(
          requestConfig.url,
          requestConfig.config
        );

        if (applyData) {
          applyData(response);
        }
      } catch (err: unknown) {
        if (err instanceof Error) {
          toast.error(err.message);
          setError(err.message || "Something went wrong");
        }
      }

      setIsLoading(false);
    },
    []
  );

  return {
    isLoading,
    error,
    sendRequest,
  };
};
