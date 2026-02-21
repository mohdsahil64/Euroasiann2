export default function FlashScreen() {
  return (
    <div style={styles.wrap}>
      <img
        src="/gif/flash.gif"
        alt="Loading"
        style={styles.img}
      />
    </div>
  );
}

const styles = {
  wrap: {
    position: "fixed",
    inset: 0,
    background: "#fff",
    zIndex: 999999,
    overflow: "hidden"
  },
  img: {
    width: "100vw",     // 🔥 full width
    height: "100vh",    // 🔥 full height
    objectFit: "cover"  // laptop + mobile perfect
  }
};