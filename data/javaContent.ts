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
    id: 'java-24-structured-concurrency',
    title: 'Structured Concurrency',
    category: 'Modern Java',
    version: 'Java 24',
    description: 'Simplify multi-threaded programming by treating groups of related tasks running in different threads as a single unit of work.',
    codeSnippet: `import java.util.concurrent.StructuredTaskScope;

public class ConcurrencyMastery {
    public static void main(String[] args) {
        try (var scope = new StructuredTaskScope.ShutdownOnFailure()) {
            var task1 = scope.fork(() -> "User Profile Loaded");
            var task2 = scope.fork(() -> "Order History Loaded");

            scope.join().throwIfFailed();

            System.out.println(task1.get());
            System.out.println(task2.get());
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}`,
    explanation: 'Structured Concurrency (JEP 480) treats related tasks as a unit, improving error handling and reliability. If one subtask fails, the others can be automatically cancelled, preventing thread leaks.',
    expectedOutput: 'User Profile Loaded\nOrder History Loaded',
    versionHistory: [
      { version: 'Java 19', description: 'Introduced as an incubating feature.' },
      { version: 'Java 21', description: 'Refined in preview mode.' },
      { version: 'Java 24', description: 'Advanced refinements for production readiness.' }
    ]
  },
  {
    id: 'java-24-flexible-constructors',
    title: 'Flexible Constructor Bodies',
    category: 'Architecture',
    version: 'Java 24',
    description: 'Allow statements to appear before a super(...) or this(...) call in constructors, enabling cleaner validation and preparation logic.',
    codeSnippet: `public class AdvancedValidation extends BaseComponent {
    private final String name;

    public AdvancedValidation(String name) {
        // Code BEFORE super! (JEP 482)
        if (name == null || name.isBlank()) {
            throw new IllegalArgumentException("Name cannot be empty");
        }
        var processedName = name.trim().toUpperCase();
        
        super(processedName.length()); 
        this.name = processedName;
    }
    
    public static void main(String[] args) {
        var valid = new AdvancedValidation(" java master ");
        System.out.println("Initialized: " + valid.name);
    }
}

class BaseComponent {
    BaseComponent(int size) { System.out.println("Base size: " + size); }
}`,
    explanation: 'Formerly, super() had to be the very first statement. Java 24 (JEP 482) allows developers to perform validation, calculate arguments, or initialize local variables before calling the superclass constructor.',
    expectedOutput: 'Base size: 11\nInitialized: JAVA MASTER',
    versionHistory: [
      { version: 'Java 22', description: 'First preview as "Statements before super(...)".' },
      { version: 'Java 24', description: 'Finalized and renamed to Flexible Constructor Bodies.' }
    ]
  },
  {
    id: 'java-24-scoped-values',
    title: 'Scoped Values',
    category: 'Modern Java',
    version: 'Java 24',
    description: 'A modern, lightweight alternative to ThreadLocal, specifically optimized for use with Virtual Threads.',
    codeSnippet: `import java.util.ScopedValue;

public class SecurityContextDemo {
    private static final ScopedValue<String> USER_ID = ScopedValue.newInstance();

    public static void main(String[] args) {
        ScopedValue.where(USER_ID, "NoamGold").run(() -> {
            processRequest();
        });
    }

    static void processRequest() {
        // Accessible deep in the call stack without passing parameters
        System.out.println("Current User: " + USER_ID.get());
        auditLog();
    }

    static void auditLog() {
        System.out.println("Auditing actions for: " + USER_ID.get());
    }
}`,
    explanation: 'Scoped Values (JEP 481) provide a way to share data across a call stack without method parameters. Unlike ThreadLocal, they are immutable and have better performance characteristics with millions of Virtual Threads.',
    expectedOutput: 'Current User: NoamGold\nAuditing actions for: NoamGold',
    versionHistory: [
      { version: 'Java 20', description: 'Introduced as an incubating API.' },
      { version: 'Java 24', description: 'Promoted for widespread concurrency usage.' }
    ]
  },
  {
    id: 'java-swing-gui',
    title: 'Modern Java Swing GUI',
    category: 'GUI',
    version: 'Standard',
    description: 'Create desktop applications using the Swing framework with modern event handling.',
    codeSnippet: `import javax.swing.*;
import java.awt.*;

public class SimpleWindow {
    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> {
            JFrame frame = new JFrame("Java Mastery Hub");
            frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
            frame.setSize(400, 300);
            
            JButton button = new JButton("Click Me!");
            button.addActionListener(e -> 
                JOptionPane.showMessageDialog(frame, "Hello from Swing!")
            );
            
            frame.getContentPane().add(button, BorderLayout.CENTER);
            frame.setLocationRelativeTo(null);
            frame.setVisible(true);
        });
    }
}`,
    explanation: 'Swing is the classic toolkit for building Java Desktop applications. While older, it remains extremely powerful and highly customizable, especially with modern Look & Feels like FlatLaf.',
    expectedOutput: '[A desktop window opens with a button]',
    versionHistory: [
      { version: 'Java 1.2', description: 'Swing introduced as part of the Java Foundation Classes (JFC).' },
      { version: 'Java 9', description: 'Improved High-DPI support for Swing components.' }
    ]
  },
  {
    id: 'java-networking-socket',
    title: 'Networking with Sockets',
    category: 'Networking',
    version: 'Standard',
    description: 'Establish low-level TCP/IP connections between clients and servers using Java Sockets.',
    codeSnippet: `import java.io.*;
import java.net.*;

public class SimpleClient {
    public static void main(String[] args) {
        try (Socket socket = new Socket("localhost", 8080);
             PrintWriter out = new PrintWriter(socket.getOutputStream(), true);
             BufferedReader in = new BufferedReader(new InputStreamReader(socket.getInputStream()))) {
             
            out.println("Hello Server!");
            System.out.println("Server responded: " + in.readLine());
            
        } catch (IOException e) {
            System.err.println("Could not connect to server - Start a server first!");
        }
    }
}`,
    explanation: 'The Java Networking API (java.net) provides classes for implementing networking applications. Sockets are the fundamental building blocks of almost all network communication.',
    expectedOutput: 'Could not connect to server - Start a server first!',
    versionHistory: [
      { version: 'Java 1.0', description: 'Initial Socket and ServerSocket APIs.' },
      { version: 'Java 11', description: 'New high-level HTTP Client API introduced as a modern alternative for web services.' }
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
    explanation: 'Stream Gatherers (JEP 485) allow developers to define custom intermediate operations that were previously difficult to express, such as windowing or stateful mapping.',
    expectedOutput: 'Windows: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]',
    versionHistory: [
      { version: 'Java 22', description: 'Introduced as a preview feature.' },
      { version: 'Java 24', description: 'Finalized as a standard feature (JEP 485).' }
    ]
  },
  {
    id: 'java-25-previews',
    title: 'Java 25 & Future Prospects',
    category: 'Modern Java',
    version: 'Java 25 (LTS)',
    description: 'Explore the roadmap for the next Long-Term Support release, Java 25, focusing on Project Panama and Project Valhalla.',
    codeSnippet: `// Speculative Java 25+ feature: Value Types (Project Valhalla)
// public value class Point {
//    int x;
//    int y;
// }

public class Java25Preview {
    public static void main(String[] args) {
        System.out.println("Preparing for Java 25 LTS...");
        System.out.println("Key projects: Valhalla, Panama, and Loom refinements.");
    }
}`,
    explanation: 'Java 25 is slated to be the next major LTS release in late 2025. It aims to finalize many long-running projects, including specialized memory management and native code interop.',
    expectedOutput: 'Preparing for Java 25 LTS...\nKey projects: Valhalla, Panama, and Loom refinements.',
    versionHistory: [
      { version: 'Java 21', description: 'LTS release with Virtual Threads.' },
      { version: 'Java 24', description: 'Standardization of Stream Gatherers.' },
      { version: 'Java 25', description: 'Upcoming LTS release (expected Sept 2025).' }
    ]
  }
];