
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
    codeSnippet: `// Concept code: JavaFX requires specific setup
/*
import javafx.application.Application;
import javafx.scene.Scene;
import javafx.scene.control.Label;
import javafx.stage.Stage;

public class HelloFX extends Application {
    public void start(Stage stage) {
        stage.setScene(new Scene(new Label("Hello JavaFX"), 400, 300));
        stage.show();
    }
}
*/
public class MockFX {
    public static void main(String[] args) {
        System.out.println("JavaFX Application starting...");
        System.out.println("Scene Graph initialized with CSS styling.");
    }
}`,
    explanation: 'JavaFX is the successor to Swing, offering hardware acceleration, FXML for UI layout, and easy CSS styling.',
    expectedOutput: 'JavaFX Application starting...\nScene Graph initialized with CSS styling.'
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
        // Mocking response for demo
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
    // Constructor Injection
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
  }
];
