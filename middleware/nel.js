const NelMiddleware = function (req, res, next) {
  res.setHeader(
    "Report-To",
    JSON.stringify({
      group: "network-errors",
      // Expire the group in day
      max_age: 86400,
      endpoints: [{ url: "NGROK_URL/report" }],
    })
  );

  res.setHeader(
    "NEL",
    JSON.stringify({
      report_to: "network-errors",
      // Cache the policy for a day
      max_age: 86400,
    })
  );

  next();
};

module.exports = NelMiddleware;
