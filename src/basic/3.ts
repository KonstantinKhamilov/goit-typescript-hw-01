let unionType: string | number;
unionType = "hello"; // okay
unionType = 42; // okay

let literalType: "enable" | "disable";
literalType = "enable"; // okay
literalType = "disable"; // okay
literalType = "other"; // error
