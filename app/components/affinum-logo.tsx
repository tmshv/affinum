type LogoProps = {
    height: number
    fill: string
}

const Logo: React.FC<LogoProps> = ({ height, fill }) => (
    <svg width="auto" height={height} viewBox="0 0 266 16" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M260.458 1.70483V7.26406H266V8.85242H260.458V14.4116H258.875V8.85242H253.333V7.26406H258.875V1.70483H260.458ZM7.125 1.70483V7.26406H12.6667V8.85242H7.125V14.4116H5.54167V8.85242H0V7.26406H5.54167V1.70483H7.125ZM71.7778 12.2621V11.3408C71.3302 11.7424 70.8079 12.0512 70.2409 12.2493C69.6738 12.4474 69.0733 12.5309 68.4739 12.495C66.3628 12.495 64.7583 11.595 64.7583 9.68895C64.7583 7.78293 66.5 6.96757 68.6111 6.96757H71.7778C71.7778 5.56982 70.6167 5.06155 68.9594 5.06155C68.4395 5.00837 67.9147 5.09397 67.4384 5.30967C66.962 5.52537 66.5509 5.86352 66.2467 6.28987H64.4733C65.0328 4.56387 66.7744 3.58968 68.9383 3.58968C71.5456 3.58968 73.3189 4.78623 73.3189 6.89345V12.2621H71.7778ZM71.7778 8.88418V8.33355H68.6111C67.1333 8.33355 66.2889 8.75711 66.2889 9.68895C66.2889 10.6208 67.1756 11.0338 68.5372 11.0338C70.5111 11.0338 71.7039 10.1549 71.7039 8.91595M96.4039 8.07942C96.423 8.64082 96.3269 9.20018 96.1215 9.72275C95.9161 10.2453 95.6058 10.72 95.2098 11.1172C94.8139 11.5144 94.3407 11.8257 93.8198 12.0317C93.2989 12.2378 92.7413 12.3342 92.1817 12.315H91.8861V16.0529H90.3028V12.2621H90.0072C89.4476 12.2813 88.89 12.1848 88.3691 11.9788C87.8482 11.7727 87.375 11.4614 86.9791 11.0642C86.5831 10.667 86.2728 10.1924 86.0674 9.66981C85.862 9.14723 85.7659 8.58788 85.785 8.02647C85.7643 7.46466 85.8593 6.90461 86.0642 6.38132C86.2691 5.85803 86.5793 5.38277 86.9756 4.98524C87.3719 4.5877 87.8456 4.27645 88.3673 4.07095C88.8889 3.86544 89.4472 3.77009 90.0072 3.79087H90.3028V0H91.8861V3.83322H92.1817C92.7413 3.81403 93.2989 3.91045 93.8198 4.11652C94.3407 4.32258 94.8139 4.63389 95.2098 5.03109C95.6058 5.4283 95.9161 5.90292 96.1215 6.42549C96.3269 6.94807 96.423 7.50742 96.4039 8.06883M90.3239 5.22038H90.0811C89.7119 5.20393 89.3434 5.26674 89.0003 5.40462C88.6572 5.5425 88.3473 5.75227 88.0915 6.01991C87.8357 6.28755 87.6398 6.60689 87.5169 6.95658C87.394 7.30627 87.347 7.67825 87.3789 8.04765C87.3486 8.41621 87.3968 8.78702 87.5204 9.13542C87.644 9.48382 87.8402 9.80183 88.0958 10.0683C88.3514 10.3347 88.6607 10.5435 89.003 10.6808C89.3453 10.8181 89.7128 10.8806 90.0811 10.8643H90.3239V5.22038ZM94.8522 8.04765C94.8825 7.6777 94.834 7.30552 94.7099 6.95584C94.5857 6.60615 94.3888 6.28699 94.1322 6.01955C93.8756 5.75212 93.5652 5.54254 93.2216 5.40475C92.878 5.26695 92.5091 5.20411 92.1395 5.22038H91.9072V10.8643H92.1395C92.5082 10.8804 92.8761 10.8178 93.2189 10.6807C93.5617 10.5435 93.8715 10.3349 94.1279 10.0687C94.3844 9.8024 94.5816 9.48456 94.7064 9.13617C94.8313 8.78777 94.881 8.41675 94.8522 8.04765ZM119.478 8.04765C119.497 8.60906 119.401 9.16841 119.196 9.69099C118.991 10.2136 118.68 10.6882 118.284 11.0854C117.888 11.4826 117.415 11.7939 116.894 12C116.373 12.206 115.816 12.3025 115.256 12.2833H114.961V16.0212H113.377V12.2621H113.082C112.522 12.2813 111.964 12.1848 111.444 11.9788C110.923 11.7727 110.449 11.4614 110.054 11.0642C109.658 10.667 109.347 10.1924 109.142 9.66981C108.936 9.14723 108.84 8.58788 108.859 8.02647C108.839 7.46466 108.934 6.90461 109.139 6.38132C109.343 5.85803 109.654 5.38277 110.05 4.98524C110.446 4.5877 110.92 4.27645 111.442 4.07095C111.963 3.86544 112.522 3.77009 113.082 3.79087H113.377V0H114.961V3.83322H115.256C115.816 3.81403 116.373 3.91045 116.894 4.11652C117.415 4.32258 117.888 4.63389 118.284 5.03109C118.68 5.4283 118.991 5.90292 119.196 6.42549C119.401 6.94807 119.497 7.50742 119.478 8.06883M113.367 5.22038H113.124C112.755 5.20393 112.386 5.26674 112.043 5.40462C111.7 5.5425 111.39 5.75227 111.134 6.01991C110.879 6.28755 110.683 6.60689 110.56 6.95658C110.437 7.30627 110.39 7.67825 110.422 8.04765C110.391 8.41621 110.44 8.78702 110.563 9.13542C110.687 9.48382 110.883 9.80183 111.139 10.0683C111.394 10.3347 111.703 10.5435 112.046 10.6808C112.388 10.8181 112.756 10.8806 113.124 10.8643H113.367V5.22038ZM117.895 8.04765C117.925 7.6777 117.877 7.30552 117.753 6.95584C117.629 6.60615 117.432 6.28699 117.175 6.01955C116.918 5.75212 116.608 5.54254 116.264 5.40475C115.921 5.26695 115.552 5.20411 115.182 5.22038H114.95V10.8643H115.182C115.551 10.8804 115.919 10.8178 116.262 10.6807C116.604 10.5435 116.914 10.3349 117.171 10.0687C117.427 9.8024 117.624 9.48456 117.749 9.13617C117.874 8.78777 117.924 8.41675 117.895 8.04765ZM133.897 9.96426V3.83322H132.314V12.3044H133.897L139.059 6.16281V12.3044H140.642V3.83322H139.059L133.897 9.96426ZM160.286 7.30642H155.135V3.83322H153.552V12.3044H155.135V8.70417H160.286V12.2621H161.869V3.79087H160.286V7.30642ZM177.333 10.4831L173.956 3.83322H172.224L176.447 12.1456L176.014 12.9504C175.307 14.274 174.895 14.6023 173.628 14.6023H173.206V16H173.956C176.257 16 176.552 15.2588 177.861 12.7174L182.421 3.83322H180.732L177.333 10.4831ZM201.495 12.2621V3.79087H199.722L196.977 10.589L194.222 3.83322H192.428V12.3044H194.001V6.90404L196.196 12.2621H197.779L199.975 6.90404V12.2621H201.495Z" fill={fill} />
    </svg>
)

type LogoPlusProps = {
    width: number
    height: number
    fill: string
}

const LogoPlus: React.FC<LogoPlusProps> = ({ width, height, fill }) => (
    <svg width={width} height={height} viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7.125 5.55923V0H5.54167V5.55923H0V7.14758H5.54167V12.7068H7.125V7.14758H12.6667V5.55923H7.125Z" fill={fill} />
    </svg>
)

const style: React.CSSProperties = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    height: 10,
    // width: 100%;
    // display: flex;
    // align-items: center;
    // font-size: 24px;
    // margin-bottom: 32px;
}

export type AffinumLogoProps = {
    color?: string
}

const AffinumLogo: React.FC<AffinumLogoProps> = ({ color = "black" }) => {
    return (
        <div style={style}>
            <LogoPlus width={10} height={10} fill={color} />
            <div style={{ flex: 1 }} />
            <Logo height={10} fill={color} />
        </div>
    );
}

export default AffinumLogo

