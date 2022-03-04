actor {
  stable var lastGreeted: Text = "";
  stable var greetCount: Nat = 0;
  
  public func greet(name : Text) : async Text {
    lastGreeted := name;
    greetCount += 1;
    return "Hello, " # name # "!";
  };

  public func getLastGreetedPerson() : async Text {
    return lastGreeted;
  };

  public func getGreetCount() : async Nat {
    return greetCount;
  };
};
