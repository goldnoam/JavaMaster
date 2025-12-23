
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
    expectedOutput: 'Hello, Java 17!\nWelcome to the modern era.'
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
    expectedOutput: 'Language: Scala\nLanguage: Kotlin\nLanguage: Java'
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
    expectedOutput: 'List elements: [Spring, Jakarta, Micronaut]\nMap size: 2\nCaught expected error: Collections are immutable!'
  },
  {
    id: 'java-optional',
    title: 'The Optional Container',
    category: 'Basics',
    version: 'Java 8+',
    description: 'Eliminate NullPointerExceptions by using the Optional container for potentially missing values.',
    codeSnippet: `import java.util.Optional;

public class OptionalDemo {
    public static void main(String[] args) {
        String value = "Java Mastery";
        Optional<String> opt = Optional.ofNullable(value);
        
        String result = opt.map(String::toUpperCase)
                           .orElse("DEFAULT_VALUE");
                           
        System.out.println("Result: " + result);
        
        Optional<String> empty = Optional.empty();
        System.out.println("Empty check: " + empty.isPresent());
    }
}`,
    explanation: 'Optional encourages developers to think about the "missing" case explicitly, leading to more robust and readable code.',
    expectedOutput: 'Result: JAVA MASTERY\nEmpty check: false'
  },
  {
    id: 'java-stream-pipelines',
    title: 'Stream API Pipelines',
    category: 'Basics',
    version: 'Java 8+',
    description: 'Process sequences of elements with functional-style operations like filter, map, and reduce.',
    codeSnippet: `import java.util.*;
import java.util.stream.*;

public class StreamPipeline {
    public static void main(String[] args) {
        List<Integer> numbers = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
        
        int sumOfEvens = numbers.stream()
            .filter(n -> n % 2 == 0)
            .mapToInt(n -> n * 10)
            .sum();
            
        System.out.println("Processed Sum: " + sumOfEvens);
    }
}`,
    explanation: 'Streams allow for lazy evaluation and internal iteration, which can often be parallelized with minimal effort.',
    expectedOutput: 'Processed Sum: 300'
  },
  {
    id: 'java-24-gatherers',
    title: 'Stream Gatherers (Preview)',
    category: 'Modern Java',
    version: 'Java 24',
    description: 'An intermediate stream operation that allows for flexible and efficient custom processing of stream elements.',
    codeSnippet: `import java.util.stream.*;

public class GathererDemo {
    public static void main(String[] args) {
        Stream.of(1, 2, 3, 4, 5)
              .gather(Gatherers.windowFixed(2))
              .forEach(System.out::println);
    }
}`,
    explanation: 'Stream Gatherers provide a way to build custom intermediate operations that were previously hard to implement with standard map/filter/flatmap.',
    expectedOutput: '[1, 2]\n[3, 4]\n[5]'
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
    expectedOutput: 'It is a String of length: 11'
  },
  {
    id: 'java-21-virtual-threads',
    title: 'Virtual Threads (Project Loom)',
    category: 'Modern Java',
    version: 'Java 21',
    description: 'Lightweight threads that significantly reduce the effort of writing, maintaining, and observing high-throughput concurrent applications.',
    codeSnippet: `import java.util.concurrent.*;
import java.util.stream.*;
import java.time.*;

public class VirtualThreadDemo {
    public static void main(String[] args) {
        try (var executor = Executors.newVirtualThreadPerTaskExecutor()) {
            IntStream.range(0, 3).forEach(i -> {
                executor.submit(() -> {
                    System.out.println("Task " + i + " on " + Thread.currentThread());
                    return i;
                });
            });
        }
    }
}`,
    explanation: 'Virtual threads are managed by the JVM instead of the OS, allowing millions of threads to coexist without high memory overhead.',
    expectedOutput: 'Task 0 on VirtualThread[#21]/runnable@ForkJoinPool-1-worker-1\nTask 1 on VirtualThread[#23]/runnable@ForkJoinPool-1-worker-2\nTask 2 on VirtualThread[#24]/runnable@ForkJoinPool-1-worker-3'
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
    expectedOutput: 'User Name: Alice\nUser Age: 30\nToString: User[name=Alice, age=30]'
  },
  {
    id: 'java-17-sealed-classes',
    title: 'Sealed Classes',
    category: 'Modern Java',
    version: 'Java 17',
    description: 'Classes and interfaces that restrict which other classes or interfaces may extend or implement them.',
    codeSnippet: `public sealed interface Shape permits Circle, Square {}

final class Circle implements Shape {}
final class Square implements Shape {}

public class SealedDemo {
    public static void main(String[] args) {
        Shape s = new Circle();
        System.out.println("Shape created: " + s.getClass().getSimpleName());
    }
}`,
    explanation: 'Sealed classes allow developers to define "exhaustive" hierarchies, making pattern matching more powerful and type-safe.',
    expectedOutput: 'Shape created: Circle'
  },
  {
    id: 'completable-future',
    title: 'Asynchronous CompletableFuture',
    category: 'Modern Java',
    version: 'Java 8+',
    description: 'Build non-blocking, asynchronous logic using the powerful CompletableFuture API.',
    codeSnippet: `import java.util.concurrent.*;

public class AsyncDemo {
    public static void main(String[] args) throws Exception {
        CompletableFuture<String> future = CompletableFuture.supplyAsync(() -> {
            return "Data fetched";
        });
        
        future.thenAccept(result -> System.out.println("Callback: " + result))
              .get(); // Wait for completion for demo
    }
}`,
    explanation: 'CompletableFuture allows you to chain multiple asynchronous operations and handle errors in a functional way, avoiding "callback hell".',
    expectedOutput: 'Callback: Data fetched'
  },
  {
    id: 'swing-gui',
    title: 'Java Swing Desktop GUI',
    category: 'GUI',
    description: 'The classic toolkit for building window-based applications in Java.',
    codeSnippet: `import javax.swing.*;

public class SimpleApp {
    public static void main(String[] args) {
        System.out.println("Initializing Swing Event Dispatch Thread...");
        JFrame frame = new JFrame("Master Java");
        JButton button = new JButton("Click Me");
        frame.add(button);
        frame.setSize(300, 200);
        System.out.println("Window visible: true");
    }
}`,
    explanation: 'Swing uses a pluggable look-and-feel and follows an event-driven architecture. Components like JFrame and JPanel form the core of the layout.',
    expectedOutput: 'Initializing Swing Event Dispatch Thread...\nWindow visible: true'
  },
  {
    id: 'javafx-basics',
    title: 'Modern JavaFX Basics',
    category: 'GUI',
    version: 'Java 11+',
    description: 'Introduction to the modern, CSS-stylable toolkit for creating rich desktop applications.',
    codeSnippet: `// Concept code
public class MockFX {
    public static void main(String[] args) {
        System.out.println("JavaFX Application starting...");
        System.out.println("Scene Graph initialized with CSS styling.");
        System.out.println("Hardware acceleration: Active");
    }
}`,
    explanation: 'JavaFX is the successor to Swing, offering hardware acceleration, FXML for UI layout, and easy CSS styling.',
    expectedOutput: 'JavaFX Application starting...\nScene Graph initialized with CSS styling.\nHardware acceleration: Active'
  },
  {
    id: 'networking-client-server',
    title: 'Client-Server Socket Communication',
    category: 'Networking',
    description: 'The foundation of network communication using standard TCP/IP sockets.',
    codeSnippet: `// Mocking Network interaction
public class SocketDemo {
    public static void main(String[] args) {
        System.out.println("Server listening on port 8080...");
        System.out.println("Client connected.");
        System.out.println("Message: Hello from Java Server!");
    }
}`,
    explanation: 'Sockets provide a mechanism for two-way communication between different processes over the network.',
    expectedOutput: 'Server listening on port 8080...\nClient connected.\nMessage: Hello from Java Server!'
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
    expectedOutput: 'Sending GET request...\nResponse Status: 200 OK'
  },
  {
    id: 'java-nio2',
    title: 'Java NIO.2 (File I/O)',
    category: 'Basics',
    version: 'Java 7+',
    description: 'Master modern file handling using Path, Files, and FileSystem classes.',
    codeSnippet: `import java.nio.file.*;
import java.util.List;

public class NIODemo {
    public static void main(String[] args) throws Exception {
        Path path = Paths.get("example.txt");
        System.out.println("File Name: " + path.getFileName());
        
        // Check if file exists (Mock)
        boolean exists = Files.exists(path);
        System.out.println("Exists: " + exists);
    }
}`,
    explanation: 'NIO.2 (New I/O) provides a more comprehensive and efficient way to interact with file systems compared to the old java.io.File class.',
    expectedOutput: 'File Name: example.txt\nExists: false'
  },
  {
    id: 'jakarta-ee-rest',
    title: 'Jakarta EE RESTful Services',
    category: 'Enterprise',
    description: 'Building enterprise-grade web services using JAX-RS (Jakarta RESTful Web Services).',
    codeSnippet: `public class JakartaDemo {
    public static void main(String[] args) {
        System.out.println("Deploying artifact to Jakarta container...");
        System.out.println("Endpoint available at: http://localhost:8080/api/hello");
        System.out.println("HTTP GET 200 OK");
    }
}`,
    explanation: 'Jakarta EE provides a set of specifications for enterprise software, where JAX-RS simplifies the creation of REST APIs.',
    expectedOutput: 'Deploying artifact to Jakarta container...\nEndpoint available at: http://localhost:8080/api/hello\nHTTP GET 200 OK'
  },
  {
    id: 'jackson-json',
    title: 'JSON Serialization with Jackson',
    category: 'Enterprise',
    description: 'Serialize and deserialize Java objects to JSON format using the Jackson library.',
    codeSnippet: `// Mocking Jackson usage
public class JsonDemo {
    public static void main(String[] args) {
        String json = "{\\"name\\":\\"Java\\", \\"version\\":21}";
        System.out.println("Parsing JSON: " + json);
        System.out.println("User Object created: User[name=Java, version=21]");
    }
}`,
    explanation: 'Jackson is the industry-standard library for processing JSON in Java, widely used in Spring Boot and Jakarta EE applications.',
    expectedOutput: 'Parsing JSON: {"name":"Java", "version":21}\nUser Object created: User[name=Java, version=21]'
  },
  {
    id: 'dependency-injection',
    title: 'Inversion of Control & DI',
    category: 'Architecture',
    description: 'Understand the architectural pattern of Dependency Injection used in Spring and Jakarta CDI.',
    codeSnippet: `interface MessageService { String getMsg(); }
class EmailService implements MessageService { 
    public String getMsg() { return "Email sent!"; } 
}

class App {
    private final MessageService service;
    public App(MessageService service) { this.service = service; }
    public void run() { System.out.println(service.getMsg()); }
}

public class DIDemo {
    public static void main(String[] args) {
        App app = new App(new EmailService());
        app.run();
    }
}`,
    explanation: 'Dependency Injection (DI) is a design pattern where an object receives its dependencies from an external source rather than creating them itself.',
    expectedOutput: 'Email sent!'
  },
  {
    id: 'junit-testing',
    title: 'JUnit 5 Unit Testing',
    category: 'Architecture',
    version: 'JUnit 5',
    description: 'Ensure code quality and reliability using the modern testing framework for the JVM.',
    codeSnippet: `// Concept code
public class TestDemo {
    public static void main(String[] args) {
        System.out.println("Running Test: testAddition()...");
        System.out.println("Assertion Passed: 2 + 2 == 4");
        System.out.println("Test Status: SUCCESS");
    }
}`,
    explanation: 'JUnit 5 is composed of several different modules, making it a robust platform for unit, integration, and performance testing.',
    expectedOutput: 'Running Test: testAddition()...\nAssertion Passed: 2 + 2 == 4\nTest Status: SUCCESS'
  },
  {
    id: 'java-modules',
    title: 'The Module System (Project Jigsaw)',
    category: 'Architecture',
    version: 'Java 9+',
    description: 'Organize large applications into modules for better encapsulation and security.',
    codeSnippet: `// module-info.java example
/*
module com.master.java {
    requires java.sql;
    exports com.master.java.api;
}
*/
public class ModuleDemo {
    public static void main(String[] args) {
        System.out.println("Module com.master.java loaded.");
        System.out.println("Dependences: [java.base, java.sql]");
    }
}`,
    explanation: 'Modules provide stronger encapsulation than packages, allowing you to explicitly declare what is public and what is internal.',
    expectedOutput: 'Module com.master.java loaded.\nDependences: [java.base, java.sql]'
  },
  {
    id: 'garbage-collection-zgc',
    title: 'Z Garbage Collector (ZGC)',
    category: 'Architecture',
    version: 'Java 15+',
    description: 'Understand the low-latency, scalable garbage collector designed for modern hardware.',
    codeSnippet: `public class ZGCDemo {
    public static void main(String[] args) {
        System.out.println("JVM starting with -XX:+UseZGC");
        System.out.println("ZGC initialized. Pause times < 1ms.");
        System.out.println("Memory heap managed: 4GB - 16TB range.");
    }
}`,
    explanation: 'ZGC is a concurrent, single-generation collector that handles heaps from small to massive with ultra-low pause times.',
    expectedOutput: 'JVM starting with -XX:+UseZGC\nZGC initialized. Pause times < 1ms.\nMemory heap managed: 4GB - 16TB range.'
  },
  {
    id: 'cluster-computing',
    title: 'Java in Distributed Clusters',
    category: 'Architecture',
    description: 'Overview of horizontal scaling and shared state in Java clusters using Hazelcast or similar technology.',
    codeSnippet: `public class ClusterDemo {
    public static void main(String[] args) {
        System.out.println("Node starting...");
        System.out.println("Cluster size: 1");
        System.out.println("Shared map updated: key=value");
    }
}`,
    explanation: 'Clustering in Java often involves distributed data structures, load balancing, and messaging protocols to ensure high availability.',
    expectedOutput: 'Node starting...\nCluster size: 1\nShared map updated: key=value'
  },
  {
    id: 'annotation-processing',
    title: 'Custom Annotations',
    category: 'Architecture',
    description: 'Define and process your own metadata to reduce boilerplate and create custom framework behavior.',
    codeSnippet: `import java.lang.annotation.*;

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
@interface Debug { String value() default "No Info"; }

public class AnnotationDemo {
    @Debug("Executing core logic")
    public void run() { System.out.println("Method running..."); }
    
    public static void main(String[] args) throws Exception {
        AnnotationDemo demo = new AnnotationDemo();
        Debug debug = demo.getClass().getMethod("run").getAnnotation(Debug.class);
        System.out.println("Found Annotation: " + debug.value());
        demo.run();
    }
}`,
    explanation: 'Annotations provide metadata that can be used by compilers, tools, or at runtime to change application behavior.',
    expectedOutput: 'Found Annotation: Executing core logic\nMethod running...'
  }
];
