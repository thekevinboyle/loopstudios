module.exports = {
  mount: {
    // directory name: 'build directory'
    public: "/",
    src: "/dist",
  },
  plugins: [["@snowpack/plugin-sass", {}]],
};
