---
layout: page
title: Hello World
description: Output a simple greeting message to familiarize with syntax and output commands.
# img: assets/img/12.jpg
importance: 1
category: "Basics (syntax, data types, variables)"
related_publications: false
tags:
  - COBOL
  - Python
  - Java
  - PHP
  - Go
---

<details id="COBOL">
  <summary>🪄 COBOL</summary>
  <pre><code class="language-cobol">
*> hello.cob<br>
IDENTIFICATION DIVISION.<br>
PROGRAM-ID. HELLO.<br>
PROCEDURE DIVISION.<br>
&nbsp;&nbsp;&nbsp;&nbsp;DISPLAY "Hello, World!".<br>
&nbsp;&nbsp;&nbsp;&nbsp;STOP RUN.<br>
  </code></pre>
</details>

<details id="Python">
  <summary>🐍 Python</summary>
  <pre><code class="language-python">
# hello_world.py<br>
print("Hello, World!")
  </code></pre>
</details>

<details id="Java">
  <summary>☕ Java</summary>
  <pre><code class="language-java">
// HelloWorld.java<br>
public class HelloWorld {<br>
&nbsp;&nbsp;&nbsp;&nbsp;public static void main(String[] args) {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;System.out.println("Hello, World!");<br>
&nbsp;&nbsp;&nbsp;&nbsp;}<br>
}
  </code></pre>
</details>

<details id="PHP">
  <summary>🔷 PHP</summary>
  <pre><code class="language-php">
&lt;?php<br>
// hello_world.php<br>
echo "Hello, World!\n";<br>
?&gt;
  </code></pre>
</details>

<details id="Go">
  <summary>🔷 Go</summary>
  <pre><code class="language-go">
// hello_world.go<br>
package main<br><br>
import "fmt"<br><br>
func main() {<br>
&nbsp;&nbsp;&nbsp;&nbsp;fmt.Println("Hello, World!")<br>
}
  </code></pre>
</details>

{% include open_details.js %}
