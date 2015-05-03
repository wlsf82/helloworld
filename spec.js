/**
 * @file Main test specification.
 */

// Not an AngularJS environment.
browser.ignoreSynchronization = true;

describe('Hello World', function() {
  it('should accept the alert window', function() {
    browser.get('https://s3-sa-east-1.amazonaws.com/helloworld-wlsf82/helloworld.html');
    browser.driver.sleep(4000);
    browser.switchTo().alert().accept();
    browser.driver.sleep(4000);
  });
});
