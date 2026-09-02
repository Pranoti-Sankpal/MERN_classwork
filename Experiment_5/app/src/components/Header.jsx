function Footer(props) {
  return (
    <div style={{ background: "#333", color: "white", padding: "10px" }}>
      <p>{props.text}</p>
    </div>
  );
}

export default Footer;