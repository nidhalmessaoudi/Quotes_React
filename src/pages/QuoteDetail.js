import { useEffect } from "react";
import { Link, Route, Routes, useParams } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getSingleQuote } from "../lib/api";

function QuoteDetail() {
  const { quoteId } = useParams();

  const {
    sendRequest,
    status,
    data: loadedQuote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    <p className="centered">{error}</p>;
  }

  if (!loadedQuote.text) {
    return <h1>No quote found!</h1>;
  }

  return (
    <>
      <HighlightedQuote text={loadedQuote.text} author={loadedQuote.author} />
      <Routes>
        <Route path="comments" element={<Comments />} />
        <Route
          path=""
          element={
            <div className="centered">
              <Link className="btn--flat" to="comments">
                See Comments
              </Link>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default QuoteDetail;
