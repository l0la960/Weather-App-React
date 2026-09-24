import errorIcon from "./assets/icon-error.svg";
import retryIcon from "./assets/icon-retry.svg";
import Button from "./COMPONENTS/Button";

export default function ErrorState() {
  return (
    <section>
      <div className="error-state-container">
        <img src={errorIcon} className="error-state-error-icon"></img>
        <h1>Something went wrong</h1>
        <p>
          We couldn't connect to the server (API error). Please try again in a
          few moments.
        </p>
        <Button
          name="Retry"
          icon={retryIcon}
          classname="error-state-retry-btn"
        />
      </div>
    </section>
  );
}
