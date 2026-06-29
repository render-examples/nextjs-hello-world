const FALLBACK_DOGS = [
  "https://images.dog.ceo/breeds/hound-afghan/n02088094_1003.jpg",
  "https://images.dog.ceo/breeds/retriever-golden/n02099601_3004.jpg",
  "https://images.dog.ceo/breeds/corgi-cardigan/n02113186_1030.jpg",
  "https://images.dog.ceo/breeds/terrier-norfolk/n02094114_1784.jpg",
  "https://images.dog.ceo/breeds/poodle-miniature/n02113799_1840.jpg",
  "https://images.dog.ceo/breeds/kelpie/n02105412_4120.jpg",
];

export async function getServerSideProps() {
  try {
    const response = await fetch("https://dog.ceo/api/breeds/image/random/6");
    const data = await response.json();

    if (data.status === "success" && Array.isArray(data.message)) {
      return {
        props: {
          dogs: data.message,
        },
      };
    }
  } catch (error) {
    console.error("Failed to fetch dog images", error);
  }

  return {
    props: {
      dogs: FALLBACK_DOGS,
    },
  };
}

export default function Home({ dogs }) {
  return (
    <>
      <main style={styles.page}>
        <div style={styles.header}>
          <p style={styles.eyebrow}>Render deployment test</p>
          <h1 style={styles.title}>Dog Gallery</h1>
          <p style={styles.subtitle}>
            A simple homepage that fetches six dog photos and lays them out in a
            responsive grid.
          </p>
        </div>

        <section style={styles.grid}>
          {dogs.map((dog, index) => (
            <article key={`${dog}-${index}`} style={styles.card}>
              <img
                alt={`Dog ${index + 1}`}
                src={dog}
                style={styles.image}
              />
            </article>
          ))}
        </section>
      </main>
    </>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    margin: 0,
    padding: "48px 24px 64px",
    background:
      "linear-gradient(180deg, #fef7ed 0%, #fff7ed 45%, #ffffff 100%)",
    color: "#1f2937",
    fontFamily:
      'ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  header: {
    maxWidth: "720px",
    margin: "0 auto 32px",
    textAlign: "center",
  },
  eyebrow: {
    margin: 0,
    fontSize: "0.85rem",
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    color: "#c2410c",
  },
  title: {
    margin: "12px 0 10px",
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
    lineHeight: 1,
  },
  subtitle: {
    margin: 0,
    fontSize: "1.05rem",
    lineHeight: 1.6,
    color: "#4b5563",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "18px",
    maxWidth: "1100px",
    margin: "0 auto",
  },
  card: {
    overflow: "hidden",
    borderRadius: "20px",
    backgroundColor: "#ffffff",
    boxShadow: "0 18px 45px rgba(15, 23, 42, 0.12)",
  },
  image: {
    display: "block",
    width: "100%",
    height: "280px",
    objectFit: "cover",
  },
};
