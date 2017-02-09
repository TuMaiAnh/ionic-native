#import "HelloNative.h"
#import <Cordova/CDVPlugin.h>

@implementation HelloNative

- (void) sayHello: (CDVInvokedUrlCommand*) command
{
	[self.commandDelegate runInBackground:^{
		CDVPluginResult* pluginResult = nil;
		[CDVPluginResult resultWithStatus: CDVCommandStatus_OK messageAsString:@"I am native"];
		[self.commandDelegate sendPluginResult:pluginResult callbackId: command.callbackId];
	}];
}

@end
