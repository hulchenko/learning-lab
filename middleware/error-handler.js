// Centralized error handling

const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // Log the error for debugging

  // Set appropriate status code
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  res.status(statusCode);

  // Send a user-friendly error response (avoid exposing detailed errors in production)
  res.json({
    message: err.message || "Something went wrong!",
    // Optionally include stack trace in development only:
    // stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
};

module.exports = errorHandler;
