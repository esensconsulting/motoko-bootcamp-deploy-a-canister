import Int "mo:base/Int";
import Nat "mo:base/Nat";
import Debug "mo:base/Debug";

actor {
  stable var lastGreeted: Text = "";
  stable var greetCount: Int = 0;
  stable var greetCount_v2: Nat = 0;
  
  public func greet(name : Text) : async Text {
    lastGreeted := name;
    greetCount_v2 += 1;
    return "Hello, " # name # "!";
  };

  public func getLastGreetedPerson() : async Text {
    return lastGreeted;
  };

  public func getGreetCount() : async Nat {
    return greetCount_v2;
  };

  system func preupgrade() {
    Debug.print("Preupgradee");
    Debug.print("counter : " # Int.toText(greetCount) # " abs : " #Nat.toText(Int.abs(greetCount)));
    greetCount_v2 := Int.abs(greetCount);
    Debug.print("greetCount_v2 : " #Nat.toText(greetCount_v2));
  };

  system func postupgrade() {
    greetCount := 0;
  };
};
