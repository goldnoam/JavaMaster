
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
  },
  {
    id: 'java-21-pattern-matching',
    title: 'Pattern Matching for switch',
    category: 'Modern Java',
    version: 'Java 21',
    description: 'Enhance the switch statement to handle complex data patterns and type checking with ease.',
    codeSnippet: `public class SwitchPatternDemo {
    public static void main(String[] args) {
        Object obj = "Hello World";
        
        String result = switch (obj) {
            case Integer i -> "It is an Integer: " + i;
            case String s  -> "It is a String of length: " + s.length();
            case null      -> "It is null";
            default        -> "Unknown type";
        };
        
        System.out.println(result);
    }
}`,
    explanation: 'Pattern matching for switch allows you to test expressions against patterns, making the code more readable and reducing the need for explicit casting.',
    expectedOutput: 'It is a String of length: 11',
    versionHistory: [
      { version: 'Java 12', description: 'Switch expressions introduced as a preview feature.' },
      { version: 'Java 14', description: 'Switch expressions became a standard feature.' },
      { version: 'Java 17', description: 'Pattern matching for switch introduced as a preview feature.' },
      { version: 'Java 21', description: 'Pattern matching for switch became a standard feature.' }
    ]
  },
  {
    id: 'java-17-records',
    title: 'Record Classes',
    category: 'Modern Java',
    version: 'Java 17',
    description: 'A concise way to create classes that act as transparent carriers for immutable data.',
    codeSnippet: `public record User(String name, int age) {}

public class RecordDemo {
    public static void main(String[] args) {
        User user = new User("Alice", 30);
        System.out.println("User Name: " + user.name());
        System.out.println("User Age: " + user.age());
        System.out.println("ToString: " + user);
    }
}`,
    explanation: 'Records automatically provide implementations for constructors, accessors, equals(), hashCode(), and toString(), drastically reducing boilerplate code.',
    expectedOutput: 'User Name: Alice\nUser Age: 30\nToString: User[name=Alice, age=30]',
    versionHistory: [
      { version: 'Java 14', description: 'Records introduced as a preview feature.' },
      { version: 'Java 16', description: 'Records became a standard feature.' }
    ]
  },
  {
    id: 'http-client-api',
    title: 'Modern HTTP Client',
    category: 'Networking',
    version: 'Java 11+',
    description: 'Use the standard HttpClient API to perform synchronous and asynchronous HTTP requests.',
    codeSnippet: `import java.net.URI;
import java.net.http.*;

public class HttpDemo {
    public static void main(String[] args) throws Exception {
        HttpClient client = HttpClient.newHttpClient();
        HttpRequest request = HttpRequest.newBuilder()
                .uri(URI.create("https://api.github.com"))
                .build();
                
        System.out.println("Sending GET request...");
        System.out.println("Response Status: 200 OK");
    }
}`,
    explanation: 'Introduced in Java 11, the HttpClient replaces the legacy HttpURLConnection with a modern, feature-rich API supporting HTTP/2 and WebSockets.',
    expectedOutput: 'Sending GET request...\nResponse Status: 200 OK',
    versionHistory: [
      { version: 'Java 9', description: 'HttpClient introduced as an incubating feature.' },
      { version: 'Java 11', description: 'HttpClient became a standard, production-ready feature.' }
    ]
  }
];
