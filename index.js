const Button = (props) => {
    //  Write your code here.
    const { className, buttonText } = props;
    return <button className={`button ${className}`}>{buttonText}</button>;
  };
  
  const element = (
    //  Write your code here.
    <div>
      <h1>Social Buttons</h1>
      <div className="Buttons-container">
        <Button buttonText="Like" className="Like-Button" />
        <Button buttonText="Share" className="Share-Button" />
        <Button buttonText="Comment" className="Comment-Button" />
      </div>
    </div>
  );
  
  ReactDOM.render(element, document.getElementById("root"));

  