export default [
  {
    test: 'Mon, 10-Dec-2007 17:02:24 GMT',
    expected: 'Mon, 10 Dec 2007 17:02:24 GMT',
  },
  {
    test: 'Wed, 09 Dec 2009 16:27:23 GMT',
    expected: 'Wed, 09 Dec 2009 16:27:23 GMT',
  },
  {
    test: 'Thursday, 01-Jan-1970 00:00:00 GMT',
    expected: 'Thu, 01 Jan 1970 00:00:00 GMT',
  },
  {
    test: 'Mon Dec 10 16:32:30 2007 GMT',
    expected: 'Mon, 10 Dec 2007 16:32:30 GMT',
  },
  {
    test: 'Wednesday, 01-Jan-10 00:00:00 GMT',
    expected: 'Fri, 01 Jan 2010 00:00:00 GMT',
  },
  {
    test: 'Mon, 10-Dec-07 20:35:03 GMT',
    expected: 'Mon, 10 Dec 2007 20:35:03 GMT',
  },
  {
    test: 'Wed, 1 Jan 2020 00:00:00 GMT',
    expected: 'Wed, 01 Jan 2020 00:00:00 GMT',
  },
  {
    test: 'Saturday, 8-Dec-2012 21:24:09 GMT',
    expected: 'Sat, 08 Dec 2012 21:24:09 GMT',
  },
  {
    test: 'Thu, 31 Dec 23:55:55 2037 GMT',
    expected: 'Thu, 31 Dec 2037 23:55:55 GMT',
  },
  {
    test: 'Sun,  9 Dec 2012 13:42:05 GMT',
    expected: 'Sun, 09 Dec 2012 13:42:05 GMT',
  },
  {
    test: 'Wed Dec 12 2007 08:44:07 GMT-0500 (EST)',
    expected: 'Wed, 12 Dec 2007 08:44:07 GMT',
  },
  {
    test: 'Mon, 01-Jan-2011 00: 00:00 GMT',
    expected: null,
  },
  {
    test: 'Sun, 1-Jan-1995 00:00:00 GMT',
    expected: 'Sun, 01 Jan 1995 00:00:00 GMT',
  },
  {
    test: 'Wednesday, 01-Jan-10 0:0:00 GMT',
    expected: 'Fri, 01 Jan 2010 00:00:00 GMT',
  },
  {
    test: 'Thu, 10 Dec 2009 13:57:2 GMT',
    expected: 'Thu, 10 Dec 2009 13:57:02 GMT',
  },
] as const
