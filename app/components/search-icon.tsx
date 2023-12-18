export type SearchIconProps = {
    width: number
    height: number
}

const SearchIcon: React.FC<SearchIconProps> = ({ width, height }) => (
    <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 24" fill="none">
      <circle cx="12.0124" cy="11.8684" r="7.18745" transform="rotate(-60 12.0124 11.8684)" stroke="black" strokeWidth="2"/>
      <line x1="18.4609" y1="15.4152" x2="24.8678" y2="19.1142" stroke="black" strokeWidth="2"/>
    </svg>

)

export default SearchIcon
