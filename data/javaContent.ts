import { JavaTopic } from '../types';

export const JAVA_TOPICS: JavaTopic[] = [
  {
    id: 'java-basics-intro',
    title: 'Introduction to Java Syntax',
    category: 'Basics',
    version: 'Java 17',
    description: 'Master the fundamental syntax and structure of a Java program, including variables, data types, and control structures.',
    codeSnippet: `public class HelloWorld {
    public static void main(String[] args) {
        String greeting = "Hello, Java 17!";
        int year = 2025;
        
        System.out.println(greeting);
        if (year > 2000) {
            System.out.println("Welcome to the modern era.");
        }
    }
}`,
    explanation: 'Every Java application starts with a class and a main method. Java 17 is a Long-Term Support (LTS) release that provides a stable foundation for learning modern features.',
    expectedOutput: 'Hello, Java 17!\nWelcome to the modern era.',
    versionHistory: [
      { version: 'Java 1.0', description: 'Initial release with basic OOP concepts and simple libraries.' },
      { version: 'Java 5', description: 'Introduced Generics, Enums, and Autoboxing, changing syntax significantly.' },
      { version: 'Java 8', description: 'Shifted towards functional programming with Lambdas and Streams.' },
      { version: 'Java 17', description: 'Modern LTS with advanced syntax features like Text Blocks and Sealed Classes.' }
    ]
  },
  {
    id: 'java-24-gatherers',
    title: 'Stream Gatherers',
    category: 'Modern Java',
    version: 'Java 24',
    description: 'Enhance stream pipelines with custom intermediate operations using the new Gatherer API.',
    codeSnippet: `import java.util.stream.*;
import java.util.List;

public class GathererDemo {
    public static void main(String[] args) {
        List<Integer> numbers = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9);
        
        // Windowing operation: group elements into chunks of 3
        var windows = numbers.stream()
            .gather(Gatherers.windowFixed(3))
            .toList();
            
        System.out.println("Windows: " + windows);
    }
}`,
    explanation: 'Stream Gatherers (JEP 485) allow developers to define custom intermediate operations that were previously difficult to express, such as windowing, stateful mapping, and more.',
    expectedOutput: 'Windows: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]',
    versionHistory: [
      { version: 'Java 22', description: 'Introduced as a preview feature (JEP 461).' },
      { version: 'Java 24', description: 'Refined and finalized as a standard feature (JEP 485).' }
    ]
  },
  {
    id: 'java-24-module-imports',
    title: 'Module Import Declarations',
    category: 'Modern Java',
    version: 'Java 24',
    description: 'Import all packages exported by a module with a single declaration, simplifying dependency management.',
    codeSnippet: `import module java.base;

public class ModuleImportDemo {
    public static void main(String[] args) {
        // No need to import java.util.List or java.util.stream.Stream
        List<String> items = List.of("Java", "24", "Module", "Imports");
        items.forEach(System.out::println);
    }
}`,
    explanation: 'Module Import Declarations (JEP 476) allow developers to succinctly import all public classes and interfaces from a module. This reduces boilerplate in files that use many packages from the same module.',
    expectedOutput: 'Java\n24\nModule\nImports',
    versionHistory: [
      { version: 'Java 23', description: 'Introduced as a preview feature.' },
      { version: 'Java 24', description: 'Continued as a preview feature with refinements in JEP 476.' }
    ]
  },
  {
    id: 'java-24-constructors',
    title: 'Flexible Constructor Bodies',
    category: 'Modern Java',
    version: 'Java 24',
    description: 'Allow statements to appear before explicit constructor invocations (super() or this()).',
    codeSnippet: `public class FlexibleConstructors {
    static class Base {
        Base(int value) { System.out.println("Base: " + value); }
    }

    static class Derived extends Base {
        Derived(String input) {
            // Validation or preparation before super()
            int length = input.length();
            if (length == 0) throw new IllegalArgumentException();
            
            super(length); // No longer forced to be the first line
            System.out.println("Derived initialized");
        }
    }

    public static void main(String[] args) {
        new Derived("Java 24");
    }
}`,
    explanation: 'Flexible Constructor Bodies (JEP 482) allow developers to perform logic, such as input validation or calculation, before calling a superclass constructor, provided no instance fields are accessed.',
    expectedOutput: 'Base: 7\nDerived initialized',
    versionHistory: [
      { version: 'Java 22', description: 'Introduced as a preview feature "Statements before super(...)".' },
      { version: 'Java 24', description: 'Finalized and standardized (JEP 482).' }
    ]
  },
  {
    id: 'java-24-implicit-classes',
    title: 'Implicitly Declared Classes',
    category: 'Modern Java',
    version: 'Java 24',
    description: 'Simplify the entry point for beginners and small scripts by removing the need for a class declaration.',
    codeSnippet: `// No class declaration needed!
void main() {
    System.out.println("Hello from an implicit class in Java 24!");
    sayHello("Developer");
}

void sayHello(String name) {
    System.out.println("Hello, " + name);
}`,
    explanation: 'Implicitly Declared Classes (JEP 477) allow a source file to contain a main method without a surrounding class or static keywords. This makes Java much more approachable for learning and scripting.',
    expectedOutput: 'Hello from an implicit class in Java 24!\nHello, Developer',
    versionHistory: [
      { version: 'Java 21', description: 'Introduced as a preview feature "Unnamed Classes".' },
      { version: 'Java 24', description: 'Fourth preview with refinements to handle console interaction better (JEP 477).' }
    ]
  },
  {
    id: 'java-24-classfile',
    title: 'Class-File API',
    category: 'Modern Java',
    version: 'Java 24',
    description: 'A standard API for parsing, generating, and transforming Java class files without third-party libraries.',
    codeSnippet: `import java.lang.classfile.*;
import java.nio.file.Path;

public class ClassFileApiDemo {
    public static void main(String[] args) {
        // Conceptual usage of the standard Class-File API
        System.out.println("Using java.lang.classfile to inspect bytecode...");
        System.out.println("API Status: Standard in Java 24");
    }
}`,
    explanation: 'The Class-File API (JEP 484) provides a standard library for processing class files, replacing the need for external tools like ASM or BCEL for many use cases.',
    expectedOutput: 'Using java.lang.classfile to inspect bytecode...\nAPI Status: Standard in Java 24',
    versionHistory: [
      { version: 'Java 22', description: 'Introduced as a preview feature.' },
      { version: 'Java 24', description: 'Finalized as a standard API in the java.base module (JEP 484).' }
    ]
  },
  {
    id: 'functional-programming',
    title: 'Lambdas & Functional Interfaces',
    category: 'Basics',
    version: 'Java 8+',
    description: 'Understand how to use Lambda expressions and functional interfaces like Predicate, Consumer, and Function.',
    codeSnippet: `import java.util.*;
import java.util.function.*;

public class LambdaDemo {
    public static void main(String[] args) {
        List<String> names = Arrays.asList("Java", "Kotlin", "Scala");
        
        // Using a Lambda to sort
        names.sort((a, b) -> b.compareTo(a));
        
        // Using a Consumer
        names.forEach(name -> System.out.println("Language: " + name));
    }
}`,
    explanation: 'Lambdas provide a clear and concise way to represent one method interface using an expression. They are the backbone of the Streams API.',
    expectedOutput: 'Language: Scala\nLanguage: Kotlin\nLanguage: Java',
    versionHistory: [
      { version: 'Java 8', description: 'Introduction of Lambda expressions and the java.util.function package.' },
      { version: 'Java 11', description: 'Allowed the use of "var" for formal parameters of implicitly typed lambda expressions.' }
    ]
  },
  {
    id: 'java-collections-api',
    title: 'Modern Collections API',
    category: 'Basics',
    version: 'Java 9+',
    description: 'Use unmodifiable factory methods to create collections efficiently and understand the hierarchy.',
    codeSnippet: `import java.util.*;

public class CollectionsDemo {
    public static void main(String[] args) {
        List<String> list = List.of("Spring", "Jakarta", "Micronaut");
        Map<Integer, String> map = Map.of(1, "Alpha", 2, "Beta");
        
        System.out.println("List elements: " + list);
        System.out.println("Map size: " + map.size());
        
        try {
            list.add("Illegal");
        } catch (UnsupportedOperationException e) {
            System.out.println("Caught expected error: Collections are immutable!");
        }
    }
}`,
    explanation: 'List.of(), Set.of(), and Map.of() were introduced in Java 9 to provide a convenient way to create small, immutable collections.',
    expectedOutput: 'List elements: [Spring, Jakarta, Micronaut]\nMap size: 2\nCaught expected error: Collections are immutable!',
    versionHistory: [
      { version: 'Java 1.2', description: 'Introduction of the core Collections Framework (ArrayList, HashMap, etc.).' },
      { version: 'Java 9', description: 'Added convenience factory methods List.of(), Set.of(), and Map.of().' },
      { version: 'Java 10', description: 'Added copyOf() methods to create unmodifiable copies of existing collections.' }
    ]
  }
];