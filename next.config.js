const withTM = require("next-transpile-modules")([
    "react-leaflet-cluster",
    "leaflet",
]);

module.exports = withTM({
    compiler: {
        styledComponents: true,
    },
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            use: ["@svgr/webpack"],
        });

        // Add the following lines to configure ESM externals
        config.resolve.fallback = {
            ...config.resolve.fallback,
            assert: false,
            buffer: false,
            crypto: false,
            fs: false,
            http: false,
            https: false,
            os: false,
            stream: false,
            url: false,
            util: false,
            zlib: false,
            constants: false,
            process: false,
        };

        return config;
    },
    async headers() {
        return [
            {
                source: "/(.*)",
                headers: [
                    {
                        key: "Content-Security-Policy",
                        value: "default-src 'self'; script-src 'self' 'unsafe-eval'; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; img-src 'self' data: renewensel.com tile.openstreetmap.org leafletjs.com *.tile.openstreetmap.org *.tile.osm.org *.openstreetmap.org; font-src 'self' https://fonts.gstatic.com;",
                    },
                ],
            },
        ];
    },
    images: {
        domains: ["renewensel.com"],
    },
});
