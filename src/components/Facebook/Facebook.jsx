import { useState } from 'react';
import profiles from '../../data/berlin.json';
import './facebook.css';

function Facebook() {
  const allCountriesList = profiles.map((profile) => profile.country);
  const countriesList = [...new Set(allCountriesList)]; // Using Set to get unique countries
  const [clickedCountry, setClickedCountry] = useState('');
  const [showProfileDetails, setShowProfileDetails] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [search, setSearch] = useState('');
  const [sortedProfiles, setSortedProfiles] = useState([...profiles]);

  const sortProfiles = (profileProperty) => {
    const sorted = [...sortedProfiles].sort((a, b) => {
      if (a[profileProperty] < b[profileProperty]) return -1;
      if (a[profileProperty] > b[profileProperty]) return 1;
      return 0;
    });
    setSortedProfiles(sorted);
  };

  const handleClickedCountry = (country) => {
    setClickedCountry(country);
  };

  const handleToggleDetails = (index) => {
    setShowProfileDetails(!showProfileDetails);
    setSelectedProfile(index);
  };

  const searchedProfiles = sortedProfiles.filter((profile) =>
    profile.firstName.toLowerCase().includes(search.toLowerCase())
  );

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearch(query);
  };

  return (
    <div id="facebook">
      <div className="buttons">
        {countriesList.map((country, index) => (
          <button
            className={`${country === clickedCountry ? 'blue' : ''}`}
            onClick={() => handleClickedCountry(country)}
            key={index}
          >
            {country}
          </button>
        ))}
      </div>
      <div>
        <label htmlFor="search">Search</label>
        <input
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={handleSearch}
        />
      </div>

      <button onClick={() => sortProfiles('firstName')}>
        Sort by First Name
      </button>
      <button onClick={() => sortProfiles('lastName')}>
        Sort by Last Name
      </button>
      <button onClick={() => sortProfiles('country')}>Sort by Country</button>

      {searchedProfiles.map((profile, index) => (
        <div
          key={index}
          id="fbprofile"
          className={`${profile.country === clickedCountry ? 'blue' : ''}`}
        >
          <img
            src={profile.img}
            alt="ProfilePic"
            width="160px"
            onClick={() => handleToggleDetails(index)}
          />
          {showProfileDetails && selectedProfile === index && (
            <div className="profile-details">
              <span className="profile-info">
                <b>First Name:</b> {profile.firstName}
              </span>
              <span className="profile-info">
                <b>Last Name:</b> {profile.lastName}
              </span>
              <span className="profile-info">
                <b>Country:</b> {profile.country}
              </span>
              <span className="profile-info">
                <b>Type:</b> {profile.isStudent ? 'Student' : 'Teacher'}
              </span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Facebook;
