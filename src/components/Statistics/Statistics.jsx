import PropTypes from "prop-types";
import { Section_Stat, Item, List } from "../Statistics/Statistics.styled";

export function Statistics({ data, title }) {
  return (
    <Section_Stat>
      {title && <h2 className="title">{title}</h2>}

      <List>
        {data.map(({ id, label, percentage }) => {
          return (
            <Item key={id}>
              <span className="label">{label}:</span>
              <span className="percentage"> {percentage}%</span>
            </Item>
          );
        })}
      </List>
    </Section_Stat>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
      percentage: PropTypes.number,
    })
  ),
};
