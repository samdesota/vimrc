Vim�UnDo� �b𖾱Ч9��Y�Y8B����_-��r��o鸘   �                                   U[cy    _�                             ����                                                                                                                                                                                                                                                                                                                                                             U[cZ     �                 'use strict'5�_�                           ����                                                                                                                                                                                                                                                                                                                           	           	          v       U[ca     �         �    �         �    5�_�                           ����                                                                                                                                                                                                                                                                                                                           	           	          v       U[ca     �      	   �    �         �    5�_�                            ����                                                                                                                                                                                                                                                                                                                                                 v        U[cf     �                 5�_�                           ����                                                                                                                                                                                                                                                                                                                                                 v        U[cg     �         �    �         �    5�_�                             ����                                                                                                                                                                                                                                                                                                                                      �           v        U[cx    �   �   �           �   �   �          
    return�   �   �          V            return functionDefs[expression.to](expression.params, expression, process)�   �   �          &        if functionDefs[expression.to]�   �   �              if expression.type == 'ref'�   �   �          3runExpressionFromRuntime = (process, expression) ->�   �   �           �   �   �              true�   �   �          =        runExpressionFromRuntime process, statement.params[0]�   �   �          *    else if statement.type == 'expression'�   �   �          Q        set[setProperty] = runExpressionFromRuntime(process, statement.params[0])�   �   �          *            setProperty = statement.set.to�   �   �          $            set = runtime.properties�   �   �                  else�   �   �          D            setProperty = statement.set.to[statement.set.length - 1]�   �   �                          i++�   �   �          E                set = set.runtime.properties[statement.set[i]] = null�   �   �          1            while i < statement.set.to.length - 1�   �   �                      i = keys.length�   �   �          (                set = runtime.properties�   �   �          +                    runtime.properties = {}�   �   �          &                if !runtime.properties�   �   �                      if !set�   �   �                              break�   �   �          *                unless !set and keys.pop()�   �   �          H                set = sweet.getRef(process, keys, statement.set.refType)�   �   �                      loop�   �   �          +            keys = statement.set.to.slice()�   �   �          1        else if statement.set.to instanceof Array�   �   �                      return true�   �   �                          return false�   �   �          3                # Pouse the runtime until needs met�   �   �          ,                console.log 'Poused runtime'�   �   �                                  return�   �   �          S                            When.remove 'missingDependencies-' + change.deleted._id�   �   �          W                        if change.deleted and change.deleted._id == process.runtime._id�   �   �          T                                When.remove 'missingDependencies-' + change.data._id�   �   �          A                                checkDependencies process, change�   �   �          E                            if change.data._id == process.runtime._id�   �   �          &                        if change.data�   �   �                              (change) ->�   �   �          V                When.set 'missingDependencies-' + process.runtime._id, do (process) ->�   �   �          ;            if !checkDependencies(process, process.runtime)�   �   �          &        if statement.set.to == 'needs'�   �   �          !        runtime = process.runtime�   �   �                  setProperty = null�   �   �                  set = null�   �   �          #    if statement.type == 'property'�   �   �          1runStatementFromRuntime = (process, statement) ->�   �   �           �   �   �              true�   �   �                          return false�   �   �                      if !dep�   �   �          9            dep = runtime.properties[needs.body[dep].set]�   �   �                  for dep of needs.body�   �   �              if needs�   �   �                  set: to: 'needs')�   �   �                  type: 'property'�   �   �               needs = _.find(process.body,�   �   �          )checkDependencies = (process, runtime) ->�   �   �           �      �          
    return�   ~   �          &            process.saveStack[index]()�   }             &        for index of process.saveStack�   |   ~              if process.saveStack�   {   }          H    # if save stack exists, loop through save callbacks and execute them�   z   |          saveProcess = (process) ->�   y   {           �   x   z          
    return�   w   y                  saveProcess process�   v   x              if process.completed�   u   w              # If complete, save�   t   v           �   s   u              process.completed = true�   r   t          -    # TODO: change this logic, or simplify it�   q   s           �   p   r              console.log process.runtime�   o   q                      index++�   n   p                          return�   m   o          #                saveProcess process�   l   n                      if !paused�   k   m          2            # if we need to pause, save and return�   j   l          @            paused = runStatementFromRuntime(process, statement)�   i   k          +            statement = process.body[index]�   h   j                      # Run the statement�   g   i          )        while index < process.body.length�   f   h                  index = runtime.running�   e   g          B        # Loop through statements, starting from the running point�   d   f           �   c   e              if process.body�   b   d              # Proccess the statements�   a   c           �   `   b              runtime = process.runtime�   _   a          !        process.runtime = runtime�   ^   `                      running: 0�   ]   _                      properties: []�   \   ^                  runtime =�   [   ]              if !process.runtime�   Z   \          (    # Add an init runtime if none exists�   Y   [           �   X   Z              runtime = undefined�   W   Y          "        process = _.clone(process)�   V   X          D        process = sweet.getRef(processName, sweet.config, 'Process')�   U   W              if !process�   T   V          5    # Add an init process based on name if we need to�   S   U          !start = (processName, process) ->�   R   T           �   Q   S          6    refType.charAt(0).toUpperCase() + refType.slice(1)�   P   R          getClassName = (refType) ->�   O   Q           �   N   P          >                console.log 'finished ' + JSON.stringify(data)�   M   O          ;            assign.finish process.assignment._id, (data) ->�   L   N                  if !params�   K   M          .    'finish': (params, expression, process) ->�   J   L           �   I   K          $                evaluate = params[0]�   H   J          !            if params.length == 1�   G   I                  if params�   F   H          .    'return': (params, expression, process) ->�   E   G              �   D   F                          return false�   C   E          '                # Pause till completion�   B   D           �   A   C          3                assign.assign what, to, description�   @   B          >                    description = 'TODO: add support for this'�   ?   A          7                    # TODO: enable adding a description�   >   @           �   =   ?          M                    to = sweet.getRef(evaluate.params[1][0], process, 'Role')�   <   >          1                        value: evaluate.params[0]�   ;   =          *                        complete: 'Object'�   :   <                              what =�   9   ;          (                if evaluate.type == 'to'�   8   :          $                evaluate = params[0]�   7   9          '                description = undefined�   6   8                          to = undefined�   5   7                           what = undefined�   4   6          !            if params.length == 1�   3   5                  if params�   2   4          .    'assign': (params, expression, process) ->�   1   3           �   0   2                          else�   /   1          )                if evaluate.type == 'for'�   .   0          $                evaluate = params[0]�   -   /          !            if params.length == 1�   ,   .                  if params�   +   -          ,    'wait': (params, expression, process) ->�   *   ,              �   )   +          %                    return newProcess�   (   *          4                    #start(processName, newProcess);�   '   )          l                    newProcess = _.clone(sweet.getRef(evaluate.to, process, getClassName(evaluate.refType)))�   &   (          0                if evaluate.refType == 'process'�   %   '          $                evaluate = params[0]�   $   &          !            if params.length == 1�   #   %                  if params�   "   $          -    'start': (params, expression, process) ->�   !   #           �       "          !                    return object�      !          1                    ObjectModel.makeObject object�                 h                    object = _.clone(sweet.getRef(evaluate.to, process, getClassName(evaluate.refType)))�                /                if evaluate.refType == 'object'�                $                evaluate = params[0]�                !            if params.length == 1�                        if params�                .    'create': (params, expression, process) ->�                0sweetConfig        = require('./compile').config�                functionDefs = �                 �                checkDependencies = undefined�                $runExpressionFromRuntime = undefined�                #runStatementFromRuntime = undefined�                saveProcess = undefined�                start = undefined�                getClassName = undefined�                0sweetConfig        = require('./compile').config�                # function names�                 �                _ = require 'lodash'�                When = require './when'�   
             assign = require './assign'�   	             sweet = require './compile'�      
           ObjectModel = require './object'�      	          0sweetConfig        = require('./compile').config�                mongoose = require 'mongoose'�                 5��