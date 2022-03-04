actor {
  stable var lastGreeted: Text = "";
  
  public func greet(name : Text) : async Text {
    lastGreeted := name;
    return "Hello, " # name # "!";
  };

  public func getLastGreetedPerson() : async Text {
    return lastGreeted;
  };
};
