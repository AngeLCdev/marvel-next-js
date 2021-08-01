
module.exports = {

  justify: function (mixin, verticalAlign) {
    return {
      display: 'flex',
      alignItems: verticalAlign,
      justifyContent: 'center'
    }
  }
}