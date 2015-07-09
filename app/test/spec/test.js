/* global describe, it */

(function () {
    'use strict';
    var spyEvent;
   

    describe('The module should display few lines of content', function () {
        
        describe('by default', function () {
        	beforeEach(function() {
        		loadFixtures('fixture_container.html');
        	});

        	it('should hide the house descriptions', function () {        		
	        	expect($('.l-container')).not.toHaveClass('show');
	        	expect($('.toggle-on-button-click')).toHaveClass('hidden');
	        });
	        it('the button should show the text: Show more', function () {
	        	expect($('.do-toggle-section').text()).toEqual('Show more');
	        });
        });
        describe('when user interact', function () {
        	beforeEach(function() {
        		loadFixtures('fixture_container.html');
				spyEvent = spyOnEvent('.do-toggle-section', 'click');
    			$('.do-toggle-section').trigger('click');
        	});
        	it('click the button the first time', function () {
        		expect('click').toHaveBeenTriggeredOn('.do-toggle-section');
        		expect(spyEvent).toHaveBeenTriggered();
        	});

	    	it('should display the house descriptions', function () {
	        	expect($('.l-container')).toHaveClass('show');
	        	expect($('.toggle-on-button-click')).not.toHaveClass('hidden');
	        });
	        it('the button should show the text: Show less', function () {
	        	expect($('.do-toggle-section').text()).toEqual('Show less');
	        });
	        describe('when a user click a second time', function () {
	        	it('should go back to default', function () {
	        		$('.do-toggle-section').trigger('click');
	        		expect($('.l-container')).not.toHaveClass('show');
	        		expect($('.toggle-on-button-click')).toHaveClass('hidden');
	        		expect($('.do-toggle-section').text()).toEqual('Show more');
	        	});
	        });
        });

    });
})();
