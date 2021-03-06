# Command Line Interface

```bash
################################################################################
# 0️⃣ - Structure
################################################################################

## Add auxiliary dependencies (CSS framework and API server)
#===============================================================

npm i @picocss/pico
# :root { --spacing: 0.6rem; } on styles.css
npm install -D json-server json-server-auth
# database folder with routes an db json files

# Start the application and the API server
npm start
npm run api

## Clear initial component and styles
#====================================

# Create a Core module for header and footer components
ng g m core --module app.module.ts
ng g c core/components/header --export true
ng g c core/components/footer --export true

# Create Api folder with models and services
ng g s api/services/agencies
ng g interface api/models/agency --type interface
ng g enum api/models/agencyRange --type enum
ng g enum api/models/agencyStatus --type enum
ng g s api/services/trips
ng g interface api/models/trip --type interface
ng g enum api/models/tripKind --type enum
ng g enum api/models/tripStatus --type enum

# Create Shared module for components, directives and pipes
ng g m shared
ng g c shared/components/preview --export true
ng g c shared/components/loading --export true
ng g c shared/components/error --export true
ng g c shared/components/empty --export true
ng g c shared/components/refresh --export true

# Create Home module for home page
ng g m home --module app.module.ts --route 'home'

ng g s home/home

################################################################################
# 1️⃣ - Components
################################################################################

## Functional Presentational components
#====================================
# Container and templates as a presentational components
ng g c home/agencies --type list
ng g c home/trips --type list

ng g c shared/components/asyncWrapper --export true


## Async wrapper
#===============

# Responsible of async data loading, error detection and template rendering
# TemplateRef as input parameter
# Data$ as input parameter, with get set methods
# Container with templateOutlet and templateContext

# Pipes
#======
ng g p shared/pipes/agencyRange --export true

################################################################################
# 2️⃣ - Router
################################################################################

ng g guard amazon/amazon --implements CanActivate --implements CanDeactivate --implements CanLoad

# amazon nested sub components

################################################################################
# 3️⃣ - Injection
################################################################################

ng g s labs/weightAbstract
ng g s labs/weightMetric
ng g s labs/weightImperial

ng g s core/logger

################################################################################
# 4️⃣ - Redux
################################################################################

################################################################################
# 5️⃣ - Services testing
################################################################################

################################################################################
# 6️⃣ - Components testing
################################################################################

```
