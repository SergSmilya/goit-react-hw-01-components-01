import PropTypes from 'prop-types';

export function Statistics({ data, title }) {
  return <section className="statistics">
    {title && <h2 className="title">{title}</h2>}
    
    <ul className="stat-list">

          {data.map(({id, label, percentage}) =>  {
           return <li key={id} className="item">
              <span className="label">{ label }:</span>
              <span className="percentage"> { percentage }%</span>
            </li>
      })}
  </ul>
</section>
}

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    percentage: PropTypes.number,
  }))
}

