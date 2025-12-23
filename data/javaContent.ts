import { JavaTopic } from '../types.ts';

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
    id: 'java-24-module-imports',
    title: 'Module Import Declarations',
    category: 'Modern Java',
    version: 'Java 24',
    description: 'Import all packages exported by a module with a single declaration.',
    codeSnippet: `import module java.base;

public class ModuleImportDemo {
    public static void main(String[] args) {
        // No need for multiple utility imports
        List<String> items = List.of("Java", "24", "Module", "Imports");
        items.forEach(System.out::println);
    }
}`,
    explanation: 'Module Import Declarations (JEP 476) simplify dependency management by allowing developers to import entire modules at once, reducing header boilerplate.',
    expectedOutput: 'Java\n24\nModule\nImports',
    versionHistory: [
      { version: 'Java 23', description: 'Initial preview feature.' },
      { version: 'Java 24', description: 'Refined and continued preview (JEP 476).' }
    ]
  },
  {
    id: 'java-24-constructors',
    title: 'Flexible Constructor Bodies',
    category: 'Modern Java',
    version: 'Java 24',
    description: 'Allow logic to appear before explicit constructor invocations (super() or this()).',
    codeSnippet: `public class FlexibleConstructors {
    static class Base {
        Base(int value) { System.out.println("Base: " + value); }
    }

    static class Derived extends Base {
        Derived(String input) {
            int length = input.length();
            if (length == 0) throw new IllegalArgumentException();
            
            super(length); // No longer strictly the first line
            System.out.println("Derived initialized");
        }
    }

    public static void main(String[] args) {
        new Derived("Java 24");
    }
}`,
    explanation: 'Flexible Constructor Bodies (JEP 482) allow validation or data preparation before the superclass constructor is invoked, provided the current instance is not yet accessed.',
    expectedOutput: 'Base: 7\nDerived initialized',
    versionHistory: [
      { version: 'Java 22', description: 'Initial preview.' },
      { version: 'Java 24', description: 'Finalized and standardized (JEP 482).' }
    ]
  },
  {
    id: 'java-24-implicit-classes',
    title: 'Implicitly Declared Classes',
    category: 'Modern Java',
    version: 'Java 24',
    description: 'Remove class declaration boilerplate for simpler entry points and scripting.',
    codeSnippet: `// No class Header needed!
void main() {
    System.out.println("Hello from an implicit class in Java 24!");
    sayHello("Developer");
}

void sayHello(String name) {
    System.out.println("Hello, " + name);
}`,
    explanation: 'This feature makes Java significantly more approachable for beginners and fast scripting by allowing a main method to exist without an explicit class wrapper.',
    expectedOutput: 'Hello from an implicit class in Java 24!\nHello, Developer',
    versionHistory: [
      { version: 'Java 21', description: 'Unnamed classes preview.' },
      { version: 'Java 24', description: 'Final refined preview (JEP 477).' }
    ]
  },
  {
    id: 'java-24-classfile',
    title: 'Class-File API',
    category: 'Modern Java',
    version: 'Java 24',
    description: 'Standardized API for parsing and generating class files directly in the JDK.',
    codeSnippet: `import java.lang.classfile.*;

public class ClassFileApiDemo {
    public static void main(String[] args) {
        System.out.println("Inspecting bytecode via standard Class-File API...");
        System.out.println("Status: Standard JDK Feature");
    }
}`,
    explanation: 'The Class-File API (JEP 484) replaces third-party libraries like ASM for many use cases, allowing frameworks to generate bytecode natively.',
    expectedOutput: 'Inspecting bytecode via standard Class-File API...\nStatus: Standard JDK Feature',
    versionHistory: [
      { version: 'Java 22', description: 'Initial preview.' },
      { version: 'Java 24', description: 'Finalized as standard (JEP 484).' }
    ]
  }
];