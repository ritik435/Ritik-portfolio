const TagList = ({ tags, activeColor }) => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
    {tags.map((t, i) => (
      <span key={i} className="tag" style={i === 0 && activeColor ? { borderColor: activeColor, color: activeColor } : undefined}>
        {t}
      </span>
    ))}
  </div>
);

export default TagList;
