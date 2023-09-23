import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchCategory } from '../Redux/home/HomePageSlice';

const DetailsPage = () => {
  const { id } = useParams();
  const category = useSelector((state) => state.homepage.categories.find((c) => c.id === id));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleGoBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (!category) {
      dispatch(fetchCategory(id));
    }
  }, [category, dispatch, id]);

  if (!category) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="detail">
        <button type="button" className="btn-icon" onClick={handleGoBack}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </button>
        <h1 className="heading">Currency Details</h1>
      </div>

      <table className="container">
        <caption>Currency Detail</caption>
        <tbody>
          <tr>
            <th>Cur Logo</th>
            <td>
              <img src={category.image.small} alt={category.name} />
            </td>
          </tr>
          <tr>
            <th>Name</th>
            <td>{category.name}</td>
          </tr>
          <tr>
            <th>Symbol</th>
            <td>{category.symbol}</td>
          </tr>
          <tr>
            <th>Block time in minutes</th>
            <td>{category.block_time_in_minutes}</td>
          </tr>
          <tr>
            <th>Last update</th>
            <td>{category.last_updated}</td>
          </tr>
          <tr>
            <th>Current price</th>
            <td>{category.market_data.current_price.usd}</td>
          </tr>
          <tr>
            <th>high 24</th>
            <td>{category.market_data.high_24}</td>
          </tr>
          <tr>
            <th>Total volume</th>
            <td>{category.market_data.total_volume.usd}</td>
          </tr>
          <tr>
            <th>market cap rank</th>
            <td>{category.market_data.market_cap_rank}</td>
          </tr>
          <tr>
            <th>m_c_c_percentage_24h</th>
            <td>{category.market_data.market_cap_change_percentage_24h}</td>
          </tr>
          <tr>
            <th>m_c_change_24h</th>
            <td>{category.market_data.market_cap_change_24h}</td>
          </tr>
          <tr>
            <th>Price_change_24h</th>
            <td>{category.market_data.price_change_24h}</td>
          </tr>
          <tr>
            <th>price_change_percentage_7d_in_currency</th>
            <td>{category.market_data.price_change_percentage_7d_in_currency.usd}</td>
          </tr>
          <tr>
            <th>price_change_percentage_14d</th>
            <td>{category.market_data.price_change_percentage_14d}</td>
          </tr>
          <tr>
            <th>price_change_percentage_30d</th>
            <td>{category.market_data.price_change_percentage_30d}</td>
          </tr>
          <tr>
            <th>price_change_percentage_60d</th>
            <td>{category.market_data.price_change_percentage_60d}</td>
          </tr>
          <tr>
            <th>price_change_percentage_200d</th>
            <td>{category.market_data.price_change_percentage_200d}</td>
          </tr>
          <tr>
            <th>price_change_percentage_1y</th>
            <td>{category.market_data.price_change_percentage_1y}</td>
          </tr>
          <tr>
            <th>total volume</th>
            <td>{category.market_data.total_volume.usd}</td>
          </tr>
          <tr>
            <th>total_supply</th>
            <td>{category.market_data.total_supply}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DetailsPage;
