exports.authSuccess = (req, res) => {
    const token = req.query.token;
    res.json({ message: 'Authentication successful', token });
  };

  exports.authPending = (req, res) => {
    const token = req.query.token;
    const message = req.query.message || 'Account not yet verified. Please wait for approval.';
    
    res.json({ 
      message,
      token
    });
  };
  
  