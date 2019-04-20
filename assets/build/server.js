/******/ (function(modules) { // webpackBootstrap
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var chunk = require("./" + "" + chunkId + "." + hotCurrentHash + ".hot-update.js");
/******/ 		hotAddUpdateChunk(chunk.id, chunk.modules);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest() {
/******/ 		try {
/******/ 			var update = require("./" + "" + hotCurrentHash + ".hot-update.json");
/******/ 		} catch (e) {
/******/ 			return Promise.resolve();
/******/ 		}
/******/ 		return Promise.resolve(update);
/******/ 	}
/******/
/******/ 	//eslint-disable-next-line no-unused-vars
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "25466c888cbd22a06a46";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "server";
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.slice().map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted
/******/ 			)
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Not in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire("./src/server/index.tsx")(__webpack_require__.s = "./src/server/index.tsx");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config.ts":
/*!*******************!*\
  !*** ./config.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__dirname) {\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\nconst path = __webpack_require__(/*! path */ \"path\");\nconst APP_ENV_DEFAULT = {\n    PORT: 3000,\n    TS: 1,\n    APIKEY: '',\n    HASH: '',\n    DOMAIN: 'domain.com',\n    ANOTHER: \"\"\n};\ndotenv.config();\nlet pathEnv;\nswitch (\"development\") {\n    case \"test\":\n        pathEnv = path.resolve(__dirname, '.env.test');\n    case \"production\":\n        pathEnv = path.resolve(__dirname, '.env.production');\n    default:\n        pathEnv = path.resolve(__dirname, '.env');\n}\nconst APP_ENV = Object.assign({}, dotenv.config(pathEnv).parsed);\nfor (let item in APP_ENV) {\n    APP_ENV_DEFAULT[item] = APP_ENV[item];\n}\nexports.default = APP_ENV_DEFAULT;\n\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./config.ts?");

/***/ }),

/***/ "./src/client/api/index.ts":
/*!*********************************!*\
  !*** ./src/client/api/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst _config_1 = __webpack_require__(/*! @config */ \"./src/client/config/index.ts\");\nclass ApiServices {\n    constructor(type) {\n        this.getApiServices = () => `${_config_1.marvelApiConfigs.domain}/${this.type}`;\n        this.getConfig = () => ({\n            ts: _config_1.marvelApiConfigs.ts,\n            apikey: _config_1.marvelApiConfigs.apikey,\n            hash: _config_1.marvelApiConfigs.hash\n        });\n        this.type = type;\n    }\n}\nexports.default = ApiServices;\n\n\n//# sourceURL=webpack:///./src/client/api/index.ts?");

/***/ }),

/***/ "./src/client/config/index.ts":
/*!************************************!*\
  !*** ./src/client/config/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.marvelApiConfigs = {\n    ts: 1,\n    apikey: '22c3fa0ee15cee85210e42f6bac742f1',\n    hash: '4f021a1c41639f51b0a0051806f40e9a',\n    domain: 'https://gateway.marvel.com/v1/public'\n};\n\n\n//# sourceURL=webpack:///./src/client/config/index.ts?");

/***/ }),

/***/ "./src/client/modules sync recursive \\.reducer.ts":
/*!**********************************************!*\
  !*** ./src/client/modules sync \.reducer.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./Comics/features/comic-details/module/comic.reducer.ts\": \"./src/client/modules/Comics/features/comic-details/module/comic.reducer.ts\",\n\t\"./Comics/module/comics.reducer.ts\": \"./src/client/modules/Comics/module/comics.reducer.ts\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/client/modules sync recursive \\\\.reducer.ts\";\n\n//# sourceURL=webpack:///./src/client/modules_sync_\\.reducer.ts?");

/***/ }),

/***/ "./src/client/modules sync recursive redux-saga.ts":
/*!***********************************************!*\
  !*** ./src/client/modules sync redux-saga.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./Comics/features/comic-details/module/redux-saga.ts\": \"./src/client/modules/Comics/features/comic-details/module/redux-saga.ts\",\n\t\"./Comics/module/redux-saga.ts\": \"./src/client/modules/Comics/module/redux-saga.ts\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./src/client/modules sync recursive redux-saga.ts\";\n\n//# sourceURL=webpack:///./src/client/modules_sync_redux-saga.ts?");

/***/ }),

/***/ "./src/client/modules/App/index.tsx":
/*!******************************************!*\
  !*** ./src/client/modules/App/index.tsx ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nconst react_router_1 = __webpack_require__(/*! react-router */ \"react-router\");\nconst index_1 = __webpack_require__(/*! @comics/index */ \"./src/client/modules/Comics/index.tsx\");\nconst comic_details_1 = __webpack_require__(/*! @comics/features/comic-details */ \"./src/client/modules/Comics/features/comic-details/index.tsx\");\nconst index_2 = __webpack_require__(/*! @not-found/index */ \"./src/client/modules/NotFound/index.tsx\");\n__webpack_require__(/*! @share/scss/reset-css.scss */ \"./src/client/modules/Share/scss/reset-css.scss\");\nclass App extends React.Component {\n    render() {\n        return (React.createElement(react_router_1.Switch, null,\n            React.createElement(react_router_dom_1.Route, { exact: true, path: \"/\", component: index_1.default }),\n            React.createElement(react_router_dom_1.Route, { path: \"/comic/:id\", component: comic_details_1.default }),\n            React.createElement(react_router_dom_1.Route, { path: \"/*\", component: index_2.default })));\n    }\n}\nexports.default = App;\n\n\n//# sourceURL=webpack:///./src/client/modules/App/index.tsx?");

/***/ }),

/***/ "./src/client/modules/Comics/features/comic-details/index.tsx":
/*!********************************************************************!*\
  !*** ./src/client/modules/Comics/features/comic-details/index.tsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst withComicDetails_1 = __webpack_require__(/*! ./withComicDetails */ \"./src/client/modules/Comics/features/comic-details/withComicDetails.tsx\");\nconst index_1 = __webpack_require__(/*! @share/utils/index */ \"./src/client/modules/Share/utils/index.ts\");\nclass ComicDetails extends React.Component {\n    render() {\n        const { title, description, thumbnail, creators, dates } = this.props.comic.data;\n        const thumbnailUrl = `${thumbnail.path}.${thumbnail.extension}`;\n        const published = dates.find(date => date.type === \"onsaleDate\");\n        return (React.createElement(\"div\", { className: \"page-comic-block\" },\n            React.createElement(\"div\", { className: \"page-comic-block-details\" },\n                React.createElement(\"div\", { className: \"page-comic-block-details-thumbnail\" },\n                    React.createElement(\"img\", { src: thumbnailUrl, alt: title })),\n                React.createElement(\"div\", { className: \"page-comic-block-details-description\" },\n                    React.createElement(\"h1\", null, title),\n                    React.createElement(\"ul\", { className: \"creator\" },\n                        React.createElement(\"li\", null,\n                            React.createElement(\"h5\", null, \"Published:\"),\n                            React.createElement(\"p\", null, index_1.convertToLocalDate(published.date))),\n                        creators.items.map((creator, index) => React.createElement(\"li\", { key: index },\n                            React.createElement(\"h5\", null,\n                                creator.role,\n                                \":\"),\n                            React.createElement(\"p\", null, creator.name)))),\n                    React.createElement(\"p\", { className: \"description\" }, description))),\n            React.createElement(\"div\", { className: \"page-comic-block-purchase\" })));\n    }\n}\nexports.default = withComicDetails_1.default(ComicDetails);\n\n\n//# sourceURL=webpack:///./src/client/modules/Comics/features/comic-details/index.tsx?");

/***/ }),

/***/ "./src/client/modules/Comics/features/comic-details/module/actions.ts":
/*!****************************************************************************!*\
  !*** ./src/client/modules/Comics/features/comic-details/module/actions.ts ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst constants_1 = __webpack_require__(/*! ./constants */ \"./src/client/modules/Comics/features/comic-details/module/constants.ts\");\nexports.actionRequestFetchComicMarvel = (payload) => ({ type: constants_1.ACTION_REQUEST_FETCH_COMIC, payload });\nexports.actionFetchingComicMarvel = () => ({ type: constants_1.ACTION_FETCHING_COMIC });\nexports.actionFetchedComicMarvel = (payload) => ({ type: constants_1.ACTION_FETCHED_COMIC, payload });\nexports.actionFetchFailComicMarvel = () => ({ type: constants_1.ACTION_FETCH_FAIL_COMIC });\n\n\n//# sourceURL=webpack:///./src/client/modules/Comics/features/comic-details/module/actions.ts?");

/***/ }),

/***/ "./src/client/modules/Comics/features/comic-details/module/comic.reducer.ts":
/*!**********************************************************************************!*\
  !*** ./src/client/modules/Comics/features/comic-details/module/comic.reducer.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst constants_1 = __webpack_require__(/*! ./constants */ \"./src/client/modules/Comics/features/comic-details/module/constants.ts\");\nconst initailStateComics = {\n    status: \"\",\n    data: {},\n    cache: []\n};\nexports.default = (state = initailStateComics, action) => {\n    switch (action.type) {\n        case constants_1.ACTION_FETCHING_COMIC: {\n            return Object.assign({}, state, { status: \"fetching\" });\n        }\n        case constants_1.ACTION_FETCHED_COMIC: {\n            const comic = Object.assign({}, action.payload);\n            const isComicCached = state.cache.some(comicCached => comicCached.id == comic.id);\n            let newCache = [...state.cache];\n            !isComicCached ? newCache.push(comic) : false;\n            return Object.assign({}, state, { status: \"fetched\", data: comic, cache: newCache });\n        }\n        case constants_1.ACTION_FETCH_FAIL_COMIC: {\n            return Object.assign({}, state, { status: \"error\" });\n        }\n        default:\n            return state;\n    }\n};\n\n\n//# sourceURL=webpack:///./src/client/modules/Comics/features/comic-details/module/comic.reducer.ts?");

/***/ }),

/***/ "./src/client/modules/Comics/features/comic-details/module/constants.ts":
/*!******************************************************************************!*\
  !*** ./src/client/modules/Comics/features/comic-details/module/constants.ts ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ACTION_REQUEST_FETCH_COMIC = \"[comic] Request fetch comic marvel\";\nexports.ACTION_FETCHING_COMIC = \"[comic] Fetching comic\";\nexports.ACTION_FETCHED_COMIC = \"[comic] Fetched comic\";\nexports.ACTION_FETCH_FAIL_COMIC = \"[comic] Fetch fail comic\";\n\n\n//# sourceURL=webpack:///./src/client/modules/Comics/features/comic-details/module/constants.ts?");

/***/ }),

/***/ "./src/client/modules/Comics/features/comic-details/module/index.scss":
/*!****************************************************************************!*\
  !*** ./src/client/modules/Comics/features/comic-details/module/index.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/client/modules/Comics/features/comic-details/module/index.scss?");

/***/ }),

/***/ "./src/client/modules/Comics/features/comic-details/module/redux-connect.ts":
/*!**********************************************************************************!*\
  !*** ./src/client/modules/Comics/features/comic-details/module/redux-connect.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst reselect_1 = __webpack_require__(/*! ./reselect */ \"./src/client/modules/Comics/features/comic-details/module/reselect.ts\");\nconst actions_1 = __webpack_require__(/*! ./actions */ \"./src/client/modules/Comics/features/comic-details/module/actions.ts\");\nexports.mapStateToProps = state => ({\n    comic: reselect_1.comicSelector(state)\n});\nexports.mapDispatchToProps = {\n    fetchComicMarvel: actions_1.actionRequestFetchComicMarvel,\n    cacheComicMarvel: actions_1.actionFetchedComicMarvel\n};\n\n\n//# sourceURL=webpack:///./src/client/modules/Comics/features/comic-details/module/redux-connect.ts?");

/***/ }),

/***/ "./src/client/modules/Comics/features/comic-details/module/redux-saga.ts":
/*!*******************************************************************************!*\
  !*** ./src/client/modules/Comics/features/comic-details/module/redux-saga.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst effects_1 = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\nconst constants_1 = __webpack_require__(/*! ./constants */ \"./src/client/modules/Comics/features/comic-details/module/constants.ts\");\nconst actions_1 = __webpack_require__(/*! ./actions */ \"./src/client/modules/Comics/features/comic-details/module/actions.ts\");\nconst api_1 = __webpack_require__(/*! @comics/module/api */ \"./src/client/modules/Comics/module/api.ts\");\nfunction* actionRequetsFetchComicMarvel(action) {\n    try {\n        yield effects_1.put(actions_1.actionFetchingComicMarvel());\n        const id = action.payload;\n        const { data } = yield effects_1.call(api_1.default.apiGetComicMarvel, id);\n        if (data.code === 200) {\n            yield effects_1.put(actions_1.actionFetchedComicMarvel(data.data.results[0]));\n        }\n        else {\n            yield effects_1.put(actions_1.actionFetchFailComicMarvel());\n        }\n    }\n    catch (error) {\n        yield effects_1.put(actions_1.actionFetchFailComicMarvel());\n    }\n}\nfunction* watchRequetsFetchComicMarvel() {\n    yield effects_1.takeEvery(constants_1.ACTION_REQUEST_FETCH_COMIC, actionRequetsFetchComicMarvel);\n}\nexports.default = [\n    watchRequetsFetchComicMarvel\n];\n\n\n//# sourceURL=webpack:///./src/client/modules/Comics/features/comic-details/module/redux-saga.ts?");

/***/ }),

/***/ "./src/client/modules/Comics/features/comic-details/module/reselect.ts":
/*!*****************************************************************************!*\
  !*** ./src/client/modules/Comics/features/comic-details/module/reselect.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst reselect_1 = __webpack_require__(/*! reselect */ \"reselect\");\nexports.comicSelector = reselect_1.createSelector((state) => state.comic, comicState => comicState);\n\n\n//# sourceURL=webpack:///./src/client/modules/Comics/features/comic-details/module/reselect.ts?");

/***/ }),

/***/ "./src/client/modules/Comics/features/comic-details/withComicDetails.tsx":
/*!*******************************************************************************!*\
  !*** ./src/client/modules/Comics/features/comic-details/withComicDetails.tsx ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst header_1 = __webpack_require__(/*! ../header */ \"./src/client/modules/Comics/features/header/index.tsx\");\nconst footer_1 = __webpack_require__(/*! ../footer */ \"./src/client/modules/Comics/features/footer/index.tsx\");\nconst recompose_1 = __webpack_require__(/*! recompose */ \"recompose\");\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nconst redux_connect_1 = __webpack_require__(/*! ./module/redux-connect */ \"./src/client/modules/Comics/features/comic-details/module/redux-connect.ts\");\n__webpack_require__(/*! ./module/index.scss */ \"./src/client/modules/Comics/features/comic-details/module/index.scss\");\nconst react_spinners_1 = __webpack_require__(/*! react-spinners */ \"react-spinners\");\nconst error_boudary_1 = __webpack_require__(/*! @share/modules/error-boudary */ \"./src/client/modules/Share/modules/error-boudary/index.tsx\");\nconst enhance = WrappedComponent => class extends React.Component {\n    componentDidMount() {\n        const { cache } = this.props.comic;\n        const comicId = this.props.match.params.id;\n        const comicCacched = cache.find(comic => comic.id == comicId);\n        if (!!comicCacched) {\n            this.props.cacheComicMarvel(comicCacched);\n        }\n        else {\n            this.props.fetchComicMarvel(comicId);\n        }\n    }\n    render() {\n        const { status } = this.props.comic;\n        let content;\n        if (status === \"fetched\") {\n            content = (React.createElement(error_boudary_1.default, null,\n                React.createElement(WrappedComponent, Object.assign({}, this.props))));\n        }\n        else if (status === \"fetching\") {\n            content = (React.createElement(\"div\", { className: \"spinner\" },\n                React.createElement(react_spinners_1.BeatLoader, { sizeUnit: \"px\", size: 15, color: 'rgb(54, 215, 183)', loading: true })));\n        }\n        return (React.createElement(\"div\", { className: \"wrap\" },\n            React.createElement(header_1.default, null),\n            React.createElement(\"div\", { className: \"page-comic\" }, content),\n            React.createElement(footer_1.default, null)));\n    }\n};\nexports.default = recompose_1.compose(react_router_dom_1.withRouter, react_redux_1.connect(redux_connect_1.mapStateToProps, redux_connect_1.mapDispatchToProps), enhance);\n\n\n//# sourceURL=webpack:///./src/client/modules/Comics/features/comic-details/withComicDetails.tsx?");

/***/ }),

/***/ "./src/client/modules/Comics/features/comic-item/index.tsx":
/*!*****************************************************************!*\
  !*** ./src/client/modules/Comics/features/comic-item/index.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nclass ComicItem extends React.Component {\n    render() {\n        const { id, title, thumbnail } = this.props.comic;\n        const imageSrc = `${thumbnail.path}.${thumbnail.extension}`;\n        return (React.createElement(\"div\", { className: \"comic-item\" },\n            React.createElement(\"div\", { className: \"comic-item-image\" },\n                React.createElement(react_router_dom_1.Link, { to: `/comic/${id}` },\n                    React.createElement(\"img\", { src: imageSrc, alt: `image ${title}` }))),\n            React.createElement(\"div\", { className: \"comic-item-text\" },\n                React.createElement(\"h5\", null, title))));\n    }\n}\nexports.default = ComicItem;\n\n\n//# sourceURL=webpack:///./src/client/modules/Comics/features/comic-item/index.tsx?");

/***/ }),

/***/ "./src/client/modules/Comics/features/footer/index.tsx":
/*!*************************************************************!*\
  !*** ./src/client/modules/Comics/features/footer/index.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\n__webpack_require__(/*! ./module/index.scss */ \"./src/client/modules/Comics/features/footer/module/index.scss\");\nclass ComicsPageFooter extends React.Component {\n    render() {\n        return (React.createElement(\"div\", { className: \"home-footer\" },\n            React.createElement(\"p\", null, \"\\u00A9 2019 Copyright: marvel.com\")));\n    }\n}\nexports.default = ComicsPageFooter;\n\n\n//# sourceURL=webpack:///./src/client/modules/Comics/features/footer/index.tsx?");

/***/ }),

/***/ "./src/client/modules/Comics/features/footer/module/index.scss":
/*!*********************************************************************!*\
  !*** ./src/client/modules/Comics/features/footer/module/index.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/client/modules/Comics/features/footer/module/index.scss?");

/***/ }),

/***/ "./src/client/modules/Comics/features/header/index.tsx":
/*!*************************************************************!*\
  !*** ./src/client/modules/Comics/features/header/index.tsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\n__webpack_require__(/*! ./module/index.scss */ \"./src/client/modules/Comics/features/header/module/index.scss\");\nconst search_box_1 = __webpack_require__(/*! @comics/features/search-box */ \"./src/client/modules/Comics/features/search-box/index.tsx\");\nconst sort_box_1 = __webpack_require__(/*! @comics/features/sort-box */ \"./src/client/modules/Comics/features/sort-box/index.tsx\");\nconst views_box_1 = __webpack_require__(/*! @comics/features/views-box */ \"./src/client/modules/Comics/features/views-box/index.tsx\");\nclass ComicsPageHeader extends React.Component {\n    render() {\n        return (React.createElement(\"div\", { className: \"home-header\" },\n            React.createElement(\"div\", { className: \"home-header-upper\" },\n                React.createElement(\"ul\", { className: \"category\" },\n                    React.createElement(\"li\", null,\n                        React.createElement(\"a\", { href: \"#\" }, \"VIDEOS\")),\n                    React.createElement(\"li\", null,\n                        React.createElement(\"a\", { href: \"#\" }, \"CHARACTER\")),\n                    React.createElement(\"li\", null,\n                        React.createElement(\"a\", { href: \"#\" }, \"COMICS\")),\n                    React.createElement(\"li\", null,\n                        React.createElement(\"a\", { href: \"#\" }, \"MOVIES\")),\n                    React.createElement(\"li\", null,\n                        React.createElement(\"a\", { href: \"#\" }, \"TV SHOWS\")),\n                    React.createElement(\"li\", null,\n                        React.createElement(\"a\", { href: \"#\" }, \"GAME\")),\n                    React.createElement(\"li\", null,\n                        React.createElement(\"a\", { href: \"#\" }, \"MORE\")))),\n            React.createElement(\"div\", { className: \"home-header-lower\" },\n                React.createElement(\"ul\", { className: \"menu\" },\n                    React.createElement(\"li\", null,\n                        React.createElement(\"a\", { href: \"#\" })),\n                    React.createElement(\"li\", null,\n                        React.createElement(search_box_1.default, null)),\n                    React.createElement(\"li\", null,\n                        React.createElement(views_box_1.default, null)),\n                    React.createElement(\"li\", null,\n                        React.createElement(sort_box_1.default, null))))));\n    }\n}\nexports.default = ComicsPageHeader;\n\n\n//# sourceURL=webpack:///./src/client/modules/Comics/features/header/index.tsx?");

/***/ }),

/***/ "./src/client/modules/Comics/features/header/module/index.scss":
/*!*********************************************************************!*\
  !*** ./src/client/modules/Comics/features/header/module/index.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/client/modules/Comics/features/header/module/index.scss?");

/***/ }),

/***/ "./src/client/modules/Comics/features/search-box/index.tsx":
/*!*****************************************************************!*\
  !*** ./src/client/modules/Comics/features/search-box/index.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nconst redux_connect_1 = __webpack_require__(/*! @comics/module/redux-connect */ \"./src/client/modules/Comics/module/redux-connect.ts\");\nclass SearhBoxComics extends React.Component {\n    render() {\n        const { keySearch } = this.props.comics;\n        const onSearchComics = this.props.actionSearchComics;\n        return (React.createElement(React.Fragment, null,\n            React.createElement(\"label\", { htmlFor: \"search-box\" }, \"Search: \"),\n            React.createElement(\"input\", { className: \"search-box\", type: \"text\", name: \"search-box\", value: keySearch, onChange: (e) => onSearchComics(e.target.value), placeholder: \"Type to find something...\" })));\n    }\n}\nexports.default = react_redux_1.connect(redux_connect_1.mapStateToProps, redux_connect_1.mapDispatchToProps)(SearhBoxComics);\n\n\n//# sourceURL=webpack:///./src/client/modules/Comics/features/search-box/index.tsx?");

/***/ }),

/***/ "./src/client/modules/Comics/features/sort-box/index.tsx":
/*!***************************************************************!*\
  !*** ./src/client/modules/Comics/features/sort-box/index.tsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nconst redux_connect_1 = __webpack_require__(/*! @comics/module/redux-connect */ \"./src/client/modules/Comics/module/redux-connect.ts\");\nclass SortBoxComics extends React.Component {\n    render() {\n        const { sortBy } = this.props.comics;\n        const onSortComics = this.props.actionSortComics;\n        return (React.createElement(\"select\", { className: \"sort-box\", value: sortBy, onChange: (e) => onSortComics(e.target.value) },\n            React.createElement(\"option\", { value: \"id\" }, \"Sort by\"),\n            React.createElement(\"option\", { value: \"title\" }, \"Title\")));\n    }\n}\nexports.default = react_redux_1.connect(redux_connect_1.mapStateToProps, redux_connect_1.mapDispatchToProps)(SortBoxComics);\n\n\n//# sourceURL=webpack:///./src/client/modules/Comics/features/sort-box/index.tsx?");

/***/ }),

/***/ "./src/client/modules/Comics/features/views-box/index.tsx":
/*!****************************************************************!*\
  !*** ./src/client/modules/Comics/features/views-box/index.tsx ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nconst redux_connect_1 = __webpack_require__(/*! @comics/module/redux-connect */ \"./src/client/modules/Comics/module/redux-connect.ts\");\nclass SortBoxComics extends React.Component {\n    render() {\n        const { viewsMethods } = this.props.comics;\n        const onViewsComics = this.props.actionViewsComics;\n        return (React.createElement(\"select\", { className: \"views-box\", value: viewsMethods, onChange: (e) => onViewsComics(e.target.value) },\n            React.createElement(\"option\", { value: \"\" }, \"Grid Views\"),\n            React.createElement(\"option\", { value: \"list\" }, \"List Views\")));\n    }\n}\nexports.default = react_redux_1.connect(redux_connect_1.mapStateToProps, redux_connect_1.mapDispatchToProps)(SortBoxComics);\n\n\n//# sourceURL=webpack:///./src/client/modules/Comics/features/views-box/index.tsx?");

/***/ }),

/***/ "./src/client/modules/Comics/index.tsx":
/*!*********************************************!*\
  !*** ./src/client/modules/Comics/index.tsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst withComics_1 = __webpack_require__(/*! ./withComics */ \"./src/client/modules/Comics/withComics.tsx\");\nconst comic_item_1 = __webpack_require__(/*! ./features/comic-item */ \"./src/client/modules/Comics/features/comic-item/index.tsx\");\nconst react_js_pagination_1 = __webpack_require__(/*! react-js-pagination */ \"react-js-pagination\");\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nconst RenderComicsItem = (props) => props.comicsList.map(comicItem => React.createElement(comic_item_1.default, { key: comicItem.id, comic: comicItem }));\nconst RenderComicsItemWithListViews = (props) => (React.createElement(\"table\", { className: \"table table-hover\" },\n    React.createElement(\"tbody\", null,\n        React.createElement(\"tr\", null,\n            React.createElement(\"td\", null,\n                React.createElement(\"h5\", null, \"#\")),\n            React.createElement(\"td\", null,\n                React.createElement(\"h5\", null, \"Title\")),\n            React.createElement(\"td\", null,\n                React.createElement(\"h5\", null, \"Link\")),\n            React.createElement(\"td\", null,\n                React.createElement(\"h5\", null, \"Image\"))),\n        props.comicsList.map((comicItem) => React.createElement(\"tr\", { key: comicItem.id },\n            React.createElement(\"td\", null, comicItem.id),\n            React.createElement(\"td\", null, comicItem.title),\n            React.createElement(\"td\", null,\n                React.createElement(react_router_dom_1.Link, { to: `/comic/${comicItem.id}` },\n                    \"/comic/\",\n                    comicItem.id)),\n            React.createElement(\"td\", null,\n                React.createElement(\"img\", { src: `${comicItem.thumbnail.path}.${comicItem.thumbnail.extension}`, alt: \"\" })))))));\nclass Comics extends React.Component {\n    render() {\n        const { results, page, limit, totalRecords, } = this.props.comics.data;\n        const { keySearch, viewsMethods, resultsWithKeySearch } = this.props.comics;\n        let blockContentItems;\n        if (viewsMethods === \"list\") {\n            blockContentItems = (React.createElement(\"div\", { className: \"page-comics-block-items-list\" }, keySearch.trim() !== \"\" ?\n                React.createElement(RenderComicsItemWithListViews, { comicsList: resultsWithKeySearch }) :\n                React.createElement(RenderComicsItemWithListViews, { comicsList: results })));\n        }\n        else {\n            blockContentItems = (React.createElement(\"div\", { className: \"page-comics-block-items\" }, keySearch.trim() !== \"\" ?\n                React.createElement(RenderComicsItem, { comicsList: resultsWithKeySearch }) :\n                React.createElement(RenderComicsItem, { comicsList: results })));\n        }\n        return (React.createElement(\"div\", { className: \"page-comics-block\" },\n            blockContentItems,\n            React.createElement(\"div\", { className: \"page-comics-block-pagination\" },\n                React.createElement(react_js_pagination_1.default, { activePage: page, itemsCountPerPage: limit, totalItemsCount: totalRecords, pageRangeDisplayed: 5, onChange: (page) => this.props.onPageChange(page), innerClass: \"pagination\", itemClass: \"page-item\", linkClass: \"page-link\" }))));\n    }\n}\nexports.default = withComics_1.default(Comics);\n\n\n//# sourceURL=webpack:///./src/client/modules/Comics/index.tsx?");

/***/ }),

/***/ "./src/client/modules/Comics/module/actions.ts":
/*!*****************************************************!*\
  !*** ./src/client/modules/Comics/module/actions.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst constants_1 = __webpack_require__(/*! ./constants */ \"./src/client/modules/Comics/module/constants.ts\");\nexports.actionRequestFetchComicsMarvel = (payload) => ({ type: constants_1.ACTION_REQUEST_FETCH_COMICS, payload });\nexports.actionFetchingComicsMarvel = () => ({ type: constants_1.ACTION_FETCHING_COMICS });\nexports.actionFetchedComicsMarvel = (payload) => ({ type: constants_1.ACTION_FETCHED_COMICS, payload });\nexports.actionFetchFailComicsMarvel = () => ({ type: constants_1.ACTION_FETCH_FAIL_COMICS });\nexports.actionSortComicsByField = (payload) => ({ type: constants_1.ACTION_SORT_COMICS, payload });\nexports.actionSearchComicsByKey = (payload) => ({ type: constants_1.ACTION_SEARCH_COMICS, payload });\nexports.actionViewsComics = (payload) => ({ type: constants_1.ACTION_CHANGE_VIEWS_COMICS, payload });\n\n\n//# sourceURL=webpack:///./src/client/modules/Comics/module/actions.ts?");

/***/ }),

/***/ "./src/client/modules/Comics/module/api.ts":
/*!*************************************************!*\
  !*** ./src/client/modules/Comics/module/api.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst _api_services_1 = __webpack_require__(/*! @api-services */ \"./src/client/api/index.ts\");\nconst axios_1 = __webpack_require__(/*! axios */ \"axios\");\nconst ComicsType = \"comics\";\nclass ComicsApiServices extends _api_services_1.default {\n    constructor() {\n        super(ComicsType);\n        this.apiGetComicsMarvel = (paramsConfig) => axios_1.default.get(this.api, {\n            params: Object.assign({}, paramsConfig, this.config)\n        });\n        this.apiGetComicMarvel = (comicId) => axios_1.default.get(`${this.api}/${comicId}`, {\n            params: Object.assign({}, this.config)\n        });\n        this.api = this.getApiServices();\n        this.config = this.getConfig();\n    }\n}\nexports.default = new ComicsApiServices();\n\n\n//# sourceURL=webpack:///./src/client/modules/Comics/module/api.ts?");

/***/ }),

/***/ "./src/client/modules/Comics/module/comics.reducer.ts":
/*!************************************************************!*\
  !*** ./src/client/modules/Comics/module/comics.reducer.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst constants_1 = __webpack_require__(/*! ./constants */ \"./src/client/modules/Comics/module/constants.ts\");\nconst initailStateComics = {\n    status: \"\",\n    data: {\n        results: [],\n        limit: constants_1.LIMIT_PER_PAGE,\n        page: 1,\n        totalRecords: 0,\n        totalPages: 0,\n    },\n    resultsWithKeySearch: [],\n    sortBy: \"\",\n    keySearch: \"\",\n    viewsMethods: \"\",\n    cached: []\n};\nexports.default = (state = initailStateComics, action) => {\n    switch (action.type) {\n        case constants_1.ACTION_FETCHING_COMICS: {\n            return Object.assign({}, state, { status: \"fetching\" });\n        }\n        case constants_1.ACTION_FETCHED_COMICS: {\n            const pageLoaded = {\n                page: action.payload.page,\n                results: action.payload.results\n            };\n            const pageCached = state.cached.find(pageComics => pageComics.page == pageLoaded.page);\n            let newCached = [...state.cached];\n            !pageCached ? newCached = [...state.cached, pageLoaded] : false;\n            return Object.assign({}, state, { status: \"fetched\", data: Object.assign({}, action.payload), cached: newCached });\n        }\n        case constants_1.ACTION_FETCH_FAIL_COMICS: {\n            return Object.assign({}, state, { status: \"error\" });\n        }\n        case constants_1.ACTION_SORT_COMICS: {\n            const sortBy = action.payload;\n            const newResultsAfterSort = [...state.data.results].sort((a, b) => {\n                if (a[sortBy] < b[sortBy]) {\n                    return -1;\n                }\n                if (a[sortBy] > b[sortBy]) {\n                    return 1;\n                }\n                return 0;\n            });\n            return Object.assign({}, state, { data: Object.assign({}, state.data, { results: newResultsAfterSort }), sortBy });\n        }\n        case constants_1.ACTION_SEARCH_COMICS: {\n            const keySearch = action.payload.toLowerCase();\n            const newResultsAfterSearch = [...state.data.results].filter(comics => comics.title.toLowerCase().includes(keySearch));\n            return Object.assign({}, state, { resultsWithKeySearch: newResultsAfterSearch, keySearch });\n        }\n        case constants_1.ACTION_CHANGE_VIEWS_COMICS: {\n            const viewsMethods = action.payload;\n            return Object.assign({}, state, { viewsMethods });\n        }\n        default:\n            return state;\n    }\n};\n\n\n//# sourceURL=webpack:///./src/client/modules/Comics/module/comics.reducer.ts?");

/***/ }),

/***/ "./src/client/modules/Comics/module/constants.ts":
/*!*******************************************************!*\
  !*** ./src/client/modules/Comics/module/constants.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ACTION_REQUEST_FETCH_COMICS = \"[comics] Request fetch comics marvel\";\nexports.ACTION_FETCHING_COMICS = \"[comics] Fetching comics\";\nexports.ACTION_FETCHED_COMICS = \"[comics] Fetched comics\";\nexports.ACTION_FETCH_FAIL_COMICS = \"[comics] Fetch fail comics\";\nexports.ACTION_SORT_COMICS = \"[comics] Sort comics by field\";\nexports.ACTION_SEARCH_COMICS = \"[comics] Search comics by key\";\nexports.ACTION_CHANGE_VIEWS_COMICS = \"[comics] Change method views comics\";\nexports.LIMIT_PER_PAGE = 12;\n\n\n//# sourceURL=webpack:///./src/client/modules/Comics/module/constants.ts?");

/***/ }),

/***/ "./src/client/modules/Comics/module/index.scss":
/*!*****************************************************!*\
  !*** ./src/client/modules/Comics/module/index.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/client/modules/Comics/module/index.scss?");

/***/ }),

/***/ "./src/client/modules/Comics/module/redux-connect.ts":
/*!***********************************************************!*\
  !*** ./src/client/modules/Comics/module/redux-connect.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst reselect_1 = __webpack_require__(/*! ./reselect */ \"./src/client/modules/Comics/module/reselect.ts\");\nconst actions_1 = __webpack_require__(/*! ./actions */ \"./src/client/modules/Comics/module/actions.ts\");\nexports.mapStateToProps = state => ({\n    comics: reselect_1.comicsSelector(state)\n});\nexports.mapDispatchToProps = {\n    fetchComicsMarvel: actions_1.actionRequestFetchComicsMarvel,\n    actionSortComics: actions_1.actionSortComicsByField,\n    actionSearchComics: actions_1.actionSearchComicsByKey,\n    actionViewsComics: actions_1.actionViewsComics,\n    cachePageComicsMarvel: actions_1.actionFetchedComicsMarvel\n};\n\n\n//# sourceURL=webpack:///./src/client/modules/Comics/module/redux-connect.ts?");

/***/ }),

/***/ "./src/client/modules/Comics/module/redux-saga.ts":
/*!********************************************************!*\
  !*** ./src/client/modules/Comics/module/redux-saga.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst effects_1 = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\nconst constants_1 = __webpack_require__(/*! ./constants */ \"./src/client/modules/Comics/module/constants.ts\");\nconst actions_1 = __webpack_require__(/*! ./actions */ \"./src/client/modules/Comics/module/actions.ts\");\nconst api_1 = __webpack_require__(/*! ./api */ \"./src/client/modules/Comics/module/api.ts\");\nfunction* actionRequetsFetchComicsMarvel(action) {\n    try {\n        yield effects_1.put(actions_1.actionFetchingComicsMarvel());\n        const { limit, page } = action.payload;\n        const params = {\n            limit,\n            offset: (page - 1) * limit\n        };\n        const { data } = yield effects_1.call(api_1.default.apiGetComicsMarvel, params);\n        if (data.code === 200) {\n            const { total, results, } = data.data;\n            const payload = {\n                results,\n                page,\n                limit,\n                totalRecords: total,\n                totalPages: Math.ceil(total / params.limit)\n            };\n            yield effects_1.put(actions_1.actionFetchedComicsMarvel(payload));\n        }\n        else {\n            yield effects_1.put(actions_1.actionFetchFailComicsMarvel());\n        }\n    }\n    catch (error) {\n        yield effects_1.put(actions_1.actionFetchFailComicsMarvel());\n    }\n}\nfunction* watchRequetsFetchComicsMarvel() {\n    yield effects_1.takeEvery(constants_1.ACTION_REQUEST_FETCH_COMICS, actionRequetsFetchComicsMarvel);\n}\nexports.default = [\n    watchRequetsFetchComicsMarvel\n];\n\n\n//# sourceURL=webpack:///./src/client/modules/Comics/module/redux-saga.ts?");

/***/ }),

/***/ "./src/client/modules/Comics/module/reselect.ts":
/*!******************************************************!*\
  !*** ./src/client/modules/Comics/module/reselect.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst reselect_1 = __webpack_require__(/*! reselect */ \"reselect\");\nexports.comicsSelector = reselect_1.createSelector((state) => state.comics, comicsState => comicsState);\n\n\n//# sourceURL=webpack:///./src/client/modules/Comics/module/reselect.ts?");

/***/ }),

/***/ "./src/client/modules/Comics/withComics.tsx":
/*!**************************************************!*\
  !*** ./src/client/modules/Comics/withComics.tsx ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst recompose_1 = __webpack_require__(/*! recompose */ \"recompose\");\nconst react_router_1 = __webpack_require__(/*! react-router */ \"react-router\");\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nconst redux_connect_1 = __webpack_require__(/*! ./module/redux-connect */ \"./src/client/modules/Comics/module/redux-connect.ts\");\nconst error_boudary_1 = __webpack_require__(/*! @share/modules/error-boudary */ \"./src/client/modules/Share/modules/error-boudary/index.tsx\");\nconst react_spinners_1 = __webpack_require__(/*! react-spinners */ \"react-spinners\");\n__webpack_require__(/*! ./module/index.scss */ \"./src/client/modules/Comics/module/index.scss\");\nconst footer_1 = __webpack_require__(/*! ./features/footer */ \"./src/client/modules/Comics/features/footer/index.tsx\");\nconst header_1 = __webpack_require__(/*! ./features/header */ \"./src/client/modules/Comics/features/header/index.tsx\");\nconst enhance = WrappedComponent => class extends React.Component {\n    constructor() {\n        super(...arguments);\n        this.onPageChange = (page) => {\n            const { cached, data } = this.props.comics;\n            const { limit, totalPages, totalRecords } = data;\n            const pageCached = cached.find(pageComics => pageComics.page == page);\n            if (!!pageCached) {\n                const payload = {\n                    results: pageCached.results,\n                    page,\n                    limit,\n                    totalPages,\n                    totalRecords\n                };\n                this.props.cachePageComicsMarvel(payload);\n            }\n            else if (page >= 1 && page <= totalPages) {\n                const params = {\n                    limit,\n                    page\n                };\n                this.props.fetchComicsMarvel(params);\n            }\n        };\n    }\n    componentDidMount() {\n        const { cached, data } = this.props.comics;\n        const { limit, page } = data;\n        const pageCached = cached.find(pageComics => pageComics.page == page);\n        if (!pageCached) {\n            const params = {\n                limit,\n                page\n            };\n            this.props.fetchComicsMarvel(params);\n        }\n    }\n    render() {\n        const { status } = this.props.comics;\n        let content;\n        if (status === \"fetched\") {\n            content = (React.createElement(error_boudary_1.default, null,\n                React.createElement(WrappedComponent, Object.assign({ onPageChange: this.onPageChange, onSortComics: this.props.actionSortComics, onSearchComics: this.props.actionSearchComics }, this.props))));\n        }\n        else if (status === \"fetching\") {\n            content = (React.createElement(\"div\", { className: \"spinner\" },\n                React.createElement(react_spinners_1.BeatLoader, { sizeUnit: \"px\", size: 15, color: 'rgb(54, 215, 183)', loading: true })));\n        }\n        return (React.createElement(\"div\", { className: \"wrap\" },\n            React.createElement(header_1.default, null),\n            React.createElement(\"div\", { className: \"page-comics\" }, content),\n            React.createElement(footer_1.default, null)));\n    }\n};\nexports.default = recompose_1.compose(react_router_1.withRouter, react_redux_1.connect(redux_connect_1.mapStateToProps, redux_connect_1.mapDispatchToProps), enhance);\n\n\n//# sourceURL=webpack:///./src/client/modules/Comics/withComics.tsx?");

/***/ }),

/***/ "./src/client/modules/NotFound/index.tsx":
/*!***********************************************!*\
  !*** ./src/client/modules/NotFound/index.tsx ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nclass default_1 extends React.Component {\n    render() {\n        return (React.createElement(\"div\", null,\n            React.createElement(\"h1\", null, \"#404 Not Found Page\")));\n    }\n}\nexports.default = default_1;\n\n\n//# sourceURL=webpack:///./src/client/modules/NotFound/index.tsx?");

/***/ }),

/***/ "./src/client/modules/Share/modules/error-boudary/index.tsx":
/*!******************************************************************!*\
  !*** ./src/client/modules/Share/modules/error-boudary/index.tsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nclass ErrorBoundary extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = { hasError: false };\n    }\n    static getDerivedStateFromError(error) {\n        // Update state so the next render will show the fallback UI.\n        return { hasError: true };\n    }\n    componentDidCatch(error, info) {\n        // You can also log the error to an error reporting service\n        console.log(error, info);\n    }\n    render() {\n        if (this.state.hasError) {\n            // You can render any custom fallback UI\n            return React.createElement(\"h1\", null, \"Something went wrong. Please try again later!\");\n        }\n        return this.props.children;\n    }\n}\nexports.default = ErrorBoundary;\n\n\n//# sourceURL=webpack:///./src/client/modules/Share/modules/error-boudary/index.tsx?");

/***/ }),

/***/ "./src/client/modules/Share/scss/reset-css.scss":
/*!******************************************************!*\
  !*** ./src/client/modules/Share/scss/reset-css.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n\n//# sourceURL=webpack:///./src/client/modules/Share/scss/reset-css.scss?");

/***/ }),

/***/ "./src/client/modules/Share/utils/index.ts":
/*!*************************************************!*\
  !*** ./src/client/modules/Share/utils/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.convertToLocalDate = (date) => {\n    const d = new Date(date);\n    if (isNaN(d.getTime())) {\n        return \"--/--/---\";\n    }\n    const dd = `0${d.getDate()}`.slice(-2);\n    const MM = `0${d.getMonth() + 1}`.slice(-2);\n    const YYYY = `${d.getFullYear()}`;\n    return `${dd}/${MM}/${YYYY}`;\n};\n\n\n//# sourceURL=webpack:///./src/client/modules/Share/utils/index.ts?");

/***/ }),

/***/ "./src/client/redux/reducers.ts":
/*!**************************************!*\
  !*** ./src/client/redux/reducers.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst redux_1 = __webpack_require__(/*! redux */ \"redux\");\nconst lodash_1 = __webpack_require__(/*! lodash */ \"lodash\");\nconst requireModule = __webpack_require__(\"./src/client/modules sync recursive \\\\.reducer.ts\"); //extract [reducerName].reducer.ts files inside redux folder\nconst reducers = {};\nrequireModule.keys().forEach((fileName) => {\n    const reducerName = lodash_1.camelCase(fileName.match(/(\\w{1,})(.reducer.ts)/)[1]);\n    reducers[reducerName] = requireModule(fileName).default;\n});\nexports.default = redux_1.combineReducers(Object.assign({}, reducers));\n\n\n//# sourceURL=webpack:///./src/client/redux/reducers.ts?");

/***/ }),

/***/ "./src/client/redux/sagas.ts":
/*!***********************************!*\
  !*** ./src/client/redux/sagas.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst effects_1 = __webpack_require__(/*! redux-saga/effects */ \"redux-saga/effects\");\nconst requireModule = __webpack_require__(\"./src/client/modules sync recursive redux-saga.ts\"); //extract redux-saga.ts files inside redux folder\nlet sagas = [];\nrequireModule.keys().forEach((fileName) => {\n    if (requireModule(fileName).default) {\n        sagas = [...sagas, ...requireModule(fileName).default];\n    }\n});\nconst globalSaga = sagas.map((saga) => effects_1.fork(saga));\nfunction* rootSaga() {\n    yield effects_1.all([\n        ...globalSaga\n    ]);\n}\nexports.default = rootSaga;\n\n\n//# sourceURL=webpack:///./src/client/redux/sagas.ts?");

/***/ }),

/***/ "./src/client/redux/store.ts":
/*!***********************************!*\
  !*** ./src/client/redux/store.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst redux_1 = __webpack_require__(/*! redux */ \"redux\");\nconst redux_thunk_1 = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\nconst redux_saga_1 = __webpack_require__(/*! redux-saga */ \"redux-saga\");\nconst redux_devtools_extension_1 = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\nconst reducers_1 = __webpack_require__(/*! ./reducers */ \"./src/client/redux/reducers.ts\");\nconst sagas_1 = __webpack_require__(/*! ./sagas */ \"./src/client/redux/sagas.ts\");\nlet preloadedState = {};\nif (process.env.BROWSER_SIDE) {\n    preloadedState = Object.assign({}, window.__PRELOADED_STATE__);\n    delete window.__PRELOADED_STATE__;\n}\nconst saga = redux_saga_1.default();\nconst store = redux_1.createStore(reducers_1.default, preloadedState, redux_devtools_extension_1.composeWithDevTools(redux_1.applyMiddleware(redux_thunk_1.default, saga)));\nsaga.run(sagas_1.default);\nexports.default = store;\n\n\n//# sourceURL=webpack:///./src/client/redux/store.ts?");

/***/ }),

/***/ "./src/server/index.tsx":
/*!******************************!*\
  !*** ./src/server/index.tsx ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst React = __webpack_require__(/*! react */ \"react\");\nconst express = __webpack_require__(/*! express */ \"express\");\nconst cors = __webpack_require__(/*! cors */ \"cors\");\nconst morgan = __webpack_require__(/*! morgan */ \"morgan\");\nconst server_1 = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\nconst react_router_dom_1 = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"react-redux\");\nconst index_1 = __webpack_require__(/*! @app/index */ \"./src/client/modules/App/index.tsx\");\nconst _doten_config_1 = __webpack_require__(/*! @doten-config */ \"./config.ts\");\nconst store_1 = __webpack_require__(/*! @redux/store */ \"./src/client/redux/store.ts\");\nconst actions_1 = __webpack_require__(/*! @comics/module/actions */ \"./src/client/modules/Comics/module/actions.ts\");\nconst constants_1 = __webpack_require__(/*! @comics/module/constants */ \"./src/client/modules/Comics/module/constants.ts\");\nconst api_1 = __webpack_require__(/*! @comics/module/api */ \"./src/client/modules/Comics/module/api.ts\");\nconst app = express();\nconst port = _doten_config_1.default.PORT;\n// Use morgan to log request in dev mode\napp.use(morgan('dev'));\napp.use(cors());\napp.use(express.static('assets'));\napp.use((err, req, res, next) => {\n    console.log(err);\n    res.status(500).json({\n        error: 'Internal Server Error',\n        details: err\n    });\n});\napp.get('*', (req, res, next) => __awaiter(this, void 0, void 0, function* () {\n    console.log('req.url', req.url);\n    try {\n        store_1.default.dispatch(actions_1.actionFetchingComicsMarvel());\n        const limit = constants_1.LIMIT_PER_PAGE;\n        const page = 1;\n        const params = {\n            limit,\n            offset: (page - 1) * limit\n        };\n        const { data } = yield api_1.default.apiGetComicsMarvel(params);\n        if (data.code === 200) {\n            const { total, results, } = data.data;\n            const payload = {\n                results,\n                page,\n                limit,\n                totalRecords: total,\n                totalPages: Math.ceil(total / params.limit)\n            };\n            store_1.default.dispatch(actions_1.actionFetchedComicsMarvel(payload));\n        }\n        else {\n            store_1.default.dispatch(actions_1.actionFetchFailComicsMarvel());\n        }\n    }\n    catch (error) {\n        store_1.default.dispatch(actions_1.actionFetchFailComicsMarvel());\n    }\n    const html = server_1.renderToString(React.createElement(react_redux_1.Provider, { store: store_1.default },\n        React.createElement(react_router_dom_1.StaticRouter, { location: req.url, context: {} },\n            React.createElement(index_1.default, null))));\n    res.send(`\n    <!DOCTYPE html>\n    <html lang=\"en\">\n    <head>\n        <meta charset=\"UTF-8\">\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n        <meta http-equiv=\"X-UA-Compatible\" content=\"ie=edge\">\n        <meta http-equiv=\"Content-Security-Policy\" content=\"upgrade-insecure-requests\"> \n        <link rel=\"icon\" href=\"img/marvel-icon.ico\">\n        <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css\" integrity=\"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T\" crossorigin=\"anonymous\">\n        <link href=\"/build/styles.css\" rel=\"stylesheet\"></head>\n        <title>Marvel App</title>\n    </head>\n    <body>\n        <div id=\"root\">\n            ${html}\n        </div>\n        <script>\n        window.__PRELOADED_STATE__ = ${JSON.stringify(store_1.default.getState()).replace(/</g, '\\\\u003c')}\n        </script>\n        <script type=\"text/javascript\" src=\"/build/runtime.js\"></script>\n        <script type=\"text/javascript\" src=\"/build/vendors.js\"></script>\n        <script type=\"text/javascript\" src=\"/build/bundle.js\"></script>\n    </body>\n    </html>\n    `);\n}));\napp.listen(port, () => console.log('Server start at port ', port));\n\n\n//# sourceURL=webpack:///./src/server/index.tsx?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-js-pagination":
/*!**************************************!*\
  !*** external "react-js-pagination" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-js-pagination\");\n\n//# sourceURL=webpack:///external_%22react-js-pagination%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router":
/*!*******************************!*\
  !*** external "react-router" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router\");\n\n//# sourceURL=webpack:///external_%22react-router%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "react-spinners":
/*!*********************************!*\
  !*** external "react-spinners" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-spinners\");\n\n//# sourceURL=webpack:///external_%22react-spinners%22?");

/***/ }),

/***/ "recompose":
/*!****************************!*\
  !*** external "recompose" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"recompose\");\n\n//# sourceURL=webpack:///external_%22recompose%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");\n\n//# sourceURL=webpack:///external_%22redux-devtools-extension%22?");

/***/ }),

/***/ "redux-saga":
/*!*****************************!*\
  !*** external "redux-saga" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga\");\n\n//# sourceURL=webpack:///external_%22redux-saga%22?");

/***/ }),

/***/ "redux-saga/effects":
/*!*************************************!*\
  !*** external "redux-saga/effects" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-saga/effects\");\n\n//# sourceURL=webpack:///external_%22redux-saga/effects%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "reselect":
/*!***************************!*\
  !*** external "reselect" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"reselect\");\n\n//# sourceURL=webpack:///external_%22reselect%22?");

/***/ })

/******/ });