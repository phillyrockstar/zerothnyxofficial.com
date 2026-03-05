# flyphillyfly.github.io
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>zeropoint</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <header class="site-header">
    <nav class="nav">
      <div class="brand">Fly Philly Fly</div>
      <ul class="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#updates">Updates</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main id="home" class="container">
    <section class="hero">
      <h1>Street-Futuristic Guardian Energy</h1>
      <p class="subtitle">
        Building safer mobility systems, step by step — prototypes first, hype last.
      </p>
      <div class="hero-actions">
        <a class="btn" href="#projects">See Projects</a>
        <a class="btn secondary" href="#contact">Contact</a>
      </div>
    </section>

  <section id="projects" class="section">
      <h2>Projects</h2>
      <div class="cards">
        <article class="card">
          <h3>Guardian Core (Software)</h3>
          <p>Safety logic + simulation framework that will later connect to hardware.</p>
        </article>
        <article class="card">
          <h3>Power Systems (Battery R&D)</h3>
          <p>Battery modeling and testing code, tracked publicly as we learn.</p>
        </article>
        <article class="card">
          <h3>Materials Index</h3>
          <p>Documented materials research with practical sourcing + constraints.</p>
        </article>
      </div>
    </section>

   <section id="updates" class="section">
      <h2>Updates</h2>
      <ul class="updates">
        <li><span class="tag">Day 1</span> Website repo launched + structure set.</li>
      </ul>
    </section>

  <section id="contact" class="section">
      <h2>Contact</h2>
      <p>Email: <a href="mailto:hello@flyphillyfly.com">hello@flyphillyfly.com</a> (placeholder)</p>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container">
      <small>© <span id="year"></span> Fly Philly Fly. All rights reserved.</small>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>
:root { --max: 980px; }

* { box-sizing: border-box; }
body { margin: 0; font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial, sans-serif; line-height: 1.5; }
a { text-decoration: none; }

.container { max-width: var(--max); margin: 0 auto; padding: 24px; }

.site-header { position: sticky; top: 0; background: white; border-bottom: 1px solid #eee; }
.nav { max-width: var(--max); margin: 0 auto; padding: 14px 24px; display: flex; align-items: center; justify-content: space-between; gap: 16px; }
.brand { font-weight: 800; }
.nav-links { list-style: none; display: flex; gap: 14px; padding: 0; margin: 0; }
.nav-links a { color: #111; }

.hero { padding: 48px 0 28px; }
.subtitle { max-width: 60ch; }

.hero-actions { display: flex; gap: 10px; margin-top: 14px; flex-wrap: wrap; }
.btn { display: inline-block; padding: 10px 14px; border: 1px solid #111; border-radius: 10px; color: #111; }
.btn.secondary { opacity: .75; }

.section { padding: 28px 0; border-top: 1px solid #f1f1f1; }
.cards { display: grid; gap: 14px; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); }
.card { border: 1px solid #eee; border-radius: 14px; padding: 14px; }

.updates { padding-left: 18px; }
.tag { border: 1px solid #ddd; padding: 2px 8px; border-radius: 999px; margin-right: 8px; }

.site-footer { border-top: 1px solid #eee; padding: 18px 0; }
document.getElementById("year").textContent = new Date().getFullYear();
