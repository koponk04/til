<script>
  document.addEventListener("DOMContentLoaded", function() {
    const hash = window.location.hash.substring(1); // remove #
    if (hash) {
      const details = document.getElementById(hash);
      if (details && details.tagName === "DETAILS") {
        details.open = true;
        // Optional: scroll into view
        details.scrollIntoView({ behavior: "smooth" });
      }
    }

    // Optional: handle clicks on tags dynamically
    document.querySelectorAll('.tags a').forEach(link => {
      link.addEventListener('click', function(e) {
        const target = document.getElementById(this.getAttribute('href').substring(1));
        if (target && target.tagName === "DETAILS") {
          target.open = true;
        }
      });
    });
  });
</script>
